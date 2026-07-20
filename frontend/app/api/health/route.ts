const BACKEND_API_URL = (
  process.env.BACKEND_API_URL ?? "http://127.0.0.1:8000"
).replace(/\/$/, "");

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const response = await fetch(`${BACKEND_API_URL}/health`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Backend healthcheck failed");
    }

    return Response.json({ status: "ok" });
  } catch {
    return Response.json({ status: "unavailable" }, { status: 503 });
  }
}
