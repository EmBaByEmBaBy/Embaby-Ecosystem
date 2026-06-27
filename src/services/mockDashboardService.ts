export interface DashboardSummary {
  title: string;
  description: string;
  status: "ready" | "planned" | "active";
  metrics: string[];
}

const dashboardData: DashboardSummary[] = [
  {
    title: "بوابة تأسيس الأطفال",
    description: "خدمات تفاعلية ومحتوى تعليمي متدرج للأطفال.",
    status: "ready",
    metrics: ["5 modules", "2 live experiences", "Secure flow"],
  },
  {
    title: "استوديو المبدعين",
    description: "منصة إنتاجية لإدارة المحتوى والتعاون الإبداعي.",
    status: "active",
    metrics: ["Content pipeline", "Collaboration", "Review loop"],
  },
  {
    title: "بوابة الاهتمامات/إدارة المعرفة",
    description: "مركز لتوصيل المعرفة وتخصيص المحتوى بناءً على الاهتمامات.",
    status: "ready",
    metrics: ["Curated topics", "Knowledge map", "Personalized feed"],
  },
  {
    title: "ميدان المناظرة",
    description: "مساحة مناقشات واحتكاك معرفي عالي الجودة.",
    status: "planned",
    metrics: ["Debate rooms", "Moderation", "Live scoring"],
  },
];

export async function getDashboardSummary(): Promise<DashboardSummary[]> {
  return dashboardData;
}
