"use client";

import { useEffect, useState } from "react";
import { AlertCircle, Database, LogOut, RefreshCcw } from "lucide-react";
import {
  getAnalyticsSummary,
  getRequests,
  updateRequestStatus,
} from "@/lib/api";
import { getAdminToken, isAdminAuthenticated, removeAdminToken } from "@/lib/auth";
import type { AnalyticsSummary } from "@/types/analytics";
import type { RequestItem, RequestStatus } from "@/types/request";
import { AnalyticsSummaryPanel } from "./analytics-summary";
import { RequestAdminCard } from "./request-admin-card";
import { AdminLoginForm } from "./admin-login-form";

export default function AdminPage() {
  const [requests, setRequests] = useState<RequestItem[]>([]);
  const [analytics, setAnalytics] = useState<AnalyticsSummary | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAnalyticsLoading, setIsAnalyticsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [analyticsError, setAnalyticsError] = useState("");
  const [updatingIds, setUpdatingIds] = useState<number[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  async function loadRequests() {
    setIsLoading(true);
    setErrorMessage("");

    try {
      const data = await getRequests();
      setRequests(data);
    } catch {
      removeAdminToken();
      setIsAuthenticated(false);
      setErrorMessage("Сессия недействительна. Войдите снова.");
    } finally {
      setIsLoading(false);
    }
  }

  async function loadAnalytics() {
    setIsAnalyticsLoading(true);
    setAnalyticsError("");

    try {
      setAnalytics(await getAnalyticsSummary());
    } catch {
      setAnalyticsError("Не удалось загрузить собственную статистику.");
    } finally {
      setIsAnalyticsLoading(false);
    }
  }

  function refreshDashboard() {
    void loadRequests();
    void loadAnalytics();
  }

  async function handleStatusChange(requestId: number, status: RequestStatus) {
    setUpdatingIds((prev) => [...prev, requestId]);

    try {
      const updated = await updateRequestStatus(requestId, status);
      setRequests((prev) =>
        prev.map((item) => (item.id === requestId ? updated : item)),
      );
    } catch {
      setErrorMessage("Не удалось обновить статус заявки.");
    } finally {
      setUpdatingIds((prev) => prev.filter((id) => id !== requestId));
    }
  }

  async function handleLoginSuccess() {
    setIsAuthenticated(true);
  }

  function handleLogout() {
    removeAdminToken();
    setRequests([]);
    setAnalytics(null);
    setIsAuthenticated(false);
    setErrorMessage("");
  }

  useEffect(() => {
    const token = getAdminToken();
    if (token && isAdminAuthenticated()) {
      setIsAuthenticated(true);
    } else {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      refreshDashboard();
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#020817] px-6 py-12 text-white lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-emerald-300">
            <Database className="h-3.5 w-3.5" />
            Admin Dashboard
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Защищённый доступ
          </h1>
        </div>

        <AdminLoginForm onSuccess={handleLoginSuccess} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020817] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-emerald-300">
              <Database className="h-3.5 w-3.5" />
              Admin Dashboard
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Панель сайта
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
              Обезличенная статистика посещений и заявки, отправленные через
              форму.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={refreshDashboard}
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white transition hover:border-emerald-300/30 hover:bg-white/[0.08] active:scale-95"
            >
              <RefreshCcw className="h-4 w-4 text-emerald-300" />
              Обновить
            </button>

            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-2 rounded-2xl border border-rose-400/20 bg-rose-400/10 px-4 py-3 text-sm text-rose-200 transition hover:bg-rose-400/15 active:scale-95"
            >
              <LogOut className="h-4 w-4" />
              Выйти
            </button>
          </div>
        </div>

        <AnalyticsSummaryPanel
          data={analytics}
          isLoading={isAnalyticsLoading}
          errorMessage={analyticsError}
        />

        <div className="mb-5">
          <div className="text-xs uppercase tracking-[0.24em] text-emerald-300">
            Обращения
          </div>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            Заявки с сайта
          </h2>
        </div>

        {isLoading && (
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center text-slate-300">
            Загрузка заявок...
          </div>
        )}

        {!isLoading && errorMessage && (
          <div className="mb-6 flex items-center gap-3 rounded-3xl border border-rose-400/20 bg-rose-400/10 p-6 text-rose-200">
            <AlertCircle className="h-5 w-5" />
            {errorMessage}
          </div>
        )}

        {!isLoading && !errorMessage && requests.length === 0 && (
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center text-slate-300">
            Пока заявок нет.
          </div>
        )}

        {!isLoading && requests.length > 0 && (
          <div className="grid gap-6">
            {requests.map((request) => (
              <RequestAdminCard
                key={request.id}
                request={request}
                isUpdating={updatingIds.includes(request.id)}
                onStatusChange={handleStatusChange}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
