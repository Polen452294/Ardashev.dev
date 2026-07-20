from datetime import date
from uuid import UUID

from pydantic import BaseModel, Field


class PageViewCreate(BaseModel):
    session_id: UUID
    path: str = Field(min_length=1, max_length=2048, pattern=r"^/")
    is_entry: bool = False
    referrer: str | None = Field(default=None, max_length=2048)
    language: str | None = Field(default=None, max_length=32)
    timezone: str | None = Field(default=None, max_length=64)
    screen_width: int | None = Field(default=None, ge=0, le=20000)
    screen_height: int | None = Field(default=None, ge=0, le=20000)
    utm_source: str | None = Field(default=None, max_length=255)
    utm_medium: str | None = Field(default=None, max_length=255)
    utm_campaign: str | None = Field(default=None, max_length=255)


class AnalyticsMetric(BaseModel):
    name: str
    views: int
    visits: int | None = None


class AnalyticsDay(BaseModel):
    date: date
    views: int
    visits: int


class AnalyticsSummary(BaseModel):
    period_days: int
    views: int
    visits: int
    pages_per_visit: float
    top_pages: list[AnalyticsMetric]
    devices: list[AnalyticsMetric]
    sources: list[AnalyticsMetric]
    daily: list[AnalyticsDay]
