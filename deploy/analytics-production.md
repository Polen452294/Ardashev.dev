# Production analytics deployment

The public browser uses same-origin `/api/v1/*` endpoints. Next.js proxies them
to FastAPI, so a separate `api.ardashev.dev` DNS record is not required.

## Backend

Create `backend/.env` from `backend/.env.example` and provide the production
PostgreSQL URL and secure admin/JWT values. Then install and start the API:

```bash
cd /var/www/automation-portfolio/backend
python3 -m venv .venv
.venv/bin/pip install -r requirements.txt
```

Copy `deploy/automation-portfolio-api.service.example` to
`/etc/systemd/system/automation-portfolio-api.service`, replace the `User` and
paths when the project is installed elsewhere, then run:

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now automation-portfolio-api
sudo systemctl status automation-portfolio-api
```

FastAPI must listen only on `127.0.0.1:8000`. The `page_views` table is created
automatically during application startup.

## Frontend

Set these build/runtime variables in `frontend/.env.production.local`:

```env
BACKEND_API_URL=http://127.0.0.1:8000
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-GW0QGLSCK9
```

Rebuild and restart Next.js:

```bash
cd /var/www/automation-portfolio/frontend
npm ci
npm run build
sudo systemctl restart automation-portfolio-frontend
```

## Verification

```bash
curl -i https://ardashev.dev/api/health
curl -i https://ardashev.dev/api/v1/analytics/summary
```

The health endpoint must return `200`. The protected summary must return
`401` or `403` without an admin token, not `404` or `502`. Open several public
pages and check `/admin`; the own analytics panel should start filling in.

Nginx access logs remain an independent fallback for requests that cannot be
associated with a browser session. Keep the normal `access_log` enabled and
exclude known bots when comparing it with the application dashboard.
