from fastapi import APIRouter, Depends, HTTPException, Query, Request, Response, status
from pydantic import ValidationError
from sqlalchemy.ext.asyncio import AsyncSession

from app.api.dependencies import get_db, require_admin
from app.schemas.analytics import AnalyticsSummary, PageViewCreate
from app.services.analytics_service import AnalyticsService

router = APIRouter(prefix="/analytics", tags=["analytics"])


@router.post("/pageviews", status_code=status.HTTP_204_NO_CONTENT)
async def collect_page_view(
    request: Request,
    session: AsyncSession = Depends(get_db),
) -> Response:
    try:
        data = PageViewCreate.model_validate_json(await request.body())
    except ValidationError as error:
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail=error.errors(),
        ) from error

    service = AnalyticsService(session)
    await service.record_page_view(
        data=data,
        user_agent=request.headers.get("user-agent", ""),
    )
    return Response(status_code=status.HTTP_204_NO_CONTENT)


@router.get(
    "/summary",
    response_model=AnalyticsSummary,
    dependencies=[Depends(require_admin)],
)
async def get_analytics_summary(
    days: int = Query(default=30, ge=1, le=365),
    session: AsyncSession = Depends(get_db),
) -> AnalyticsSummary:
    return await AnalyticsService(session).get_summary(days)
