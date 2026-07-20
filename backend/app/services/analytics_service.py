from datetime import datetime, timedelta, timezone
from urllib.parse import urlsplit

from sqlalchemy import Date, cast, distinct, func, select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.page_view import PageView
from app.schemas.analytics import (
    AnalyticsDay,
    AnalyticsMetric,
    AnalyticsSummary,
    PageViewCreate,
)

BOT_MARKERS = (
    "bot",
    "crawler",
    "spider",
    "slurp",
    "headless",
    "lighthouse",
    "pagespeed",
    "pingdom",
    "uptime",
    "monitor",
)


def is_probable_bot(user_agent: str) -> bool:
    normalized = user_agent.lower()
    return not normalized or any(marker in normalized for marker in BOT_MARKERS)


def detect_device(user_agent: str) -> str:
    normalized = user_agent.lower()

    if "ipad" in normalized or "tablet" in normalized:
        return "tablet"

    if "mobile" in normalized or "android" in normalized or "iphone" in normalized:
        return "mobile"

    return "desktop"


def extract_referrer_host(referrer: str | None) -> str | None:
    if not referrer:
        return None

    try:
        return urlsplit(referrer).hostname
    except ValueError:
        return None


class AnalyticsService:
    def __init__(self, session: AsyncSession):
        self.session = session

    async def record_page_view(
        self,
        data: PageViewCreate,
        user_agent: str,
    ) -> bool:
        if is_probable_bot(user_agent):
            return False

        duplicate_after = datetime.now(timezone.utc) - timedelta(seconds=3)
        duplicate = await self.session.scalar(
            select(PageView.id)
            .where(
                PageView.session_id == str(data.session_id),
                PageView.path == data.path,
                PageView.created_at >= duplicate_after,
            )
            .limit(1)
        )

        if duplicate is not None:
            return False

        page_view = PageView(
            session_id=str(data.session_id),
            path=data.path,
            is_entry=data.is_entry,
            referrer_host=extract_referrer_host(data.referrer),
            device_type=detect_device(user_agent),
            language=data.language,
            timezone=data.timezone,
            screen_width=data.screen_width,
            screen_height=data.screen_height,
            utm_source=data.utm_source,
            utm_medium=data.utm_medium,
            utm_campaign=data.utm_campaign,
        )
        self.session.add(page_view)
        await self.session.commit()
        return True

    async def get_summary(self, days: int) -> AnalyticsSummary:
        since = datetime.now(timezone.utc) - timedelta(days=days)
        period_filter = PageView.created_at >= since

        views = await self.session.scalar(
            select(func.count(PageView.id)).where(period_filter)
        )
        visits = await self.session.scalar(
            select(func.count(distinct(PageView.session_id))).where(period_filter)
        )

        top_pages_rows = (
            await self.session.execute(
                select(
                    PageView.path,
                    func.count(PageView.id),
                    func.count(distinct(PageView.session_id)),
                )
                .where(period_filter)
                .group_by(PageView.path)
                .order_by(func.count(PageView.id).desc())
                .limit(20)
            )
        ).all()

        device_rows = (
            await self.session.execute(
                select(PageView.device_type, func.count(PageView.id))
                .where(period_filter)
                .group_by(PageView.device_type)
                .order_by(func.count(PageView.id).desc())
            )
        ).all()

        source_name = func.coalesce(PageView.utm_source, PageView.referrer_host, "direct")
        source_rows = (
            await self.session.execute(
                select(source_name, func.count(distinct(PageView.session_id)))
                .where(period_filter, PageView.is_entry.is_(True))
                .group_by(source_name)
                .order_by(func.count(distinct(PageView.session_id)).desc())
                .limit(20)
            )
        ).all()

        day_column = cast(PageView.created_at, Date)
        daily_rows = (
            await self.session.execute(
                select(
                    day_column,
                    func.count(PageView.id),
                    func.count(distinct(PageView.session_id)),
                )
                .where(period_filter)
                .group_by(day_column)
                .order_by(day_column)
            )
        ).all()

        view_count = int(views or 0)
        visit_count = int(visits or 0)

        return AnalyticsSummary(
            period_days=days,
            views=view_count,
            visits=visit_count,
            pages_per_visit=round(view_count / visit_count, 2)
            if visit_count
            else 0,
            top_pages=[
                AnalyticsMetric(name=path, views=count, visits=unique_visits)
                for path, count, unique_visits in top_pages_rows
            ],
            devices=[
                AnalyticsMetric(name=device, views=count)
                for device, count in device_rows
            ],
            sources=[
                AnalyticsMetric(name=source, views=count)
                for source, count in source_rows
            ],
            daily=[
                AnalyticsDay(date=day, views=count, visits=unique_visits)
                for day, count, unique_visits in daily_rows
            ],
        )
