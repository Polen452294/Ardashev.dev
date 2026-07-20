from pydantic import Field
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name: str = "Automation Portfolio API"
    database_url: str = Field(
        default="postgresql+asyncpg://postgres:postgres@localhost:5432/portfolio_db"
    )
    cors_origins: list[str] = [
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "https://ardashev.dev",
        "https://www.ardashev.dev",
    ]

    telegram_bot_token: str | None = None
    telegram_chat_id: str | None = None

    admin_password: str = "change_me"
    jwt_secret_key: str = "change_this_secret_key"
    jwt_algorithm: str = "HS256"
    access_token_expire_minutes: int = 10080

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=False,
        extra="ignore",
    )


settings = Settings()
