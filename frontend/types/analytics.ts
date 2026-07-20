export type AnalyticsMetric = {
  name: string;
  views: number;
  visits: number | null;
};

export type AnalyticsDay = {
  date: string;
  views: number;
  visits: number;
};

export type AnalyticsSummary = {
  period_days: number;
  views: number;
  visits: number;
  pages_per_visit: number;
  top_pages: AnalyticsMetric[];
  devices: AnalyticsMetric[];
  sources: AnalyticsMetric[];
  daily: AnalyticsDay[];
};
