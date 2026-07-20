import type { RequestFormState, RequestItem, RequestStatus } from "@/types/request";
import type { AnalyticsSummary } from "@/types/analytics";
import { getAdminToken } from "@/lib/auth";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

export async function createRequest(data: RequestFormState) {
  const response = await fetch(`${API_URL}/api/v1/requests`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: data.name,
      contact: data.contact,
      project_type: data.projectType,
      description: data.description,
      budget: data.budget || null,
    }),
  });

  if (!response.ok) {
    throw new Error("Request failed");
  }

  return response.json();
}

export async function adminLogin(password: string): Promise<{ access_token: string }> {
  const response = await fetch(`${API_URL}/api/v1/admin/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password }),
  });

  if (!response.ok) {
    throw new Error("Invalid password");
  }

  return response.json();
}

export async function getRequests(): Promise<RequestItem[]> {
  const token = getAdminToken();

  const response = await fetch(`${API_URL}/api/v1/requests`, {
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch requests");
  }

  return response.json();
}

export async function updateRequestStatus(
  requestId: number,
  status: RequestStatus,
): Promise<RequestItem> {
  const token = getAdminToken();

  const response = await fetch(`${API_URL}/api/v1/requests/${requestId}/status`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ status }),
  });

  if (!response.ok) {
    if (response.status === 401) {
      localStorage.removeItem("admin_token");
    }
    throw new Error("Failed to fetch requests");
  }

  return response.json();
}

export async function getAnalyticsSummary(
  days = 30,
): Promise<AnalyticsSummary> {
  const token = getAdminToken();
  const response = await fetch(
    `${API_URL}/api/v1/analytics/summary?days=${days}`,
    {
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch analytics");
  }

  return response.json();
}
