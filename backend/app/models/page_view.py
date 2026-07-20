from datetime import datetime

from sqlalchemy import Boolean, DateTime, Index, Integer, String, func
from sqlalchemy.orm import Mapped, mapped_column

from app.core.database import Base


class PageView(Base):
    __tablename__ = "page_views"
    __table_args__ = (
        Index("ix_page_views_created_at", "created_at"),
        Index("ix_page_views_session_created", "session_id", "created_at"),
    )

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    session_id: Mapped[str] = mapped_column(String(36), nullable=False)
    path: Mapped[str] = mapped_column(String(2048), nullable=False)
    is_entry: Mapped[bool] = mapped_column(Boolean, nullable=False, default=False)
    referrer_host: Mapped[str | None] = mapped_column(String(255))
    device_type: Mapped[str] = mapped_column(String(20), nullable=False)
    language: Mapped[str | None] = mapped_column(String(32))
    timezone: Mapped[str | None] = mapped_column(String(64))
    screen_width: Mapped[int | None] = mapped_column(Integer)
    screen_height: Mapped[int | None] = mapped_column(Integer)
    utm_source: Mapped[str | None] = mapped_column(String(255))
    utm_medium: Mapped[str | None] = mapped_column(String(255))
    utm_campaign: Mapped[str | None] = mapped_column(String(255))

    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        nullable=False,
        server_default=func.now(),
    )
