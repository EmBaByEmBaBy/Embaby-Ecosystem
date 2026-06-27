"use client";

import Link from "next/link";

const sections = [
  {
    title: "الضوابط التربوية",
    body: "تلتزم المنصة بأعلى مستويات الحماية التربوية، وتحرص على تقديم محتوى مناسب، آمن، ومبني على القيم الإنسانية والشرعية.",
  },
  {
    title: "الضوابط الشرعية",
    body: "يجب على المستخدمين الالتزام بالمعايير الشرعية والآداب العامة في جميع التفاعلات، مع احترام خصوصية الآخرين وسلامة المحتوى.",
  },
  {
    title: "سياسة الخصوصية",
    body: "تُحافظ المنصة على البيانات الشخصية وفق المعايير الأمنية الحديثة، وتقتصر المعالجة على الأغراض الوظيفية والآمنة المصرح بها.",
  },
];

export function TermsPrivacyPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.16),_transparent_28%),linear-gradient(135deg,_#050505,_#111111)] px-6 py-10 sm:px-10 lg:px-16">
      <section className="mx-auto max-w-7xl rounded-[32px] border border-white/10 bg-black/45 p-8 shadow-[0_0_140px_rgba(212,175,55,0.16)] backdrop-blur-2xl sm:p-10 lg:p-14">
        <div className="max-w-3xl text-right">
          <p className="text-sm uppercase tracking-[0.45em] text-embabi-gold">Terms & Privacy</p>
          <h1 className="mt-4 font-serif text-4xl text-white sm:text-5xl">
            الخصوصية والشروط
          </h1>
          <p className="mt-4 text-lg leading-8 text-zinc-300">
            هذه الصفحات الرسمية توضح الالتزام بالمعايير التربوية والشرعية، وتضمن أن تكون المنصة منصة آمنة، واضحة، ومحترمة للخصوصية.
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {sections.map((section) => (
            <article key={section.title} className="rounded-[24px] border border-white/10 bg-embabi-surface/70 p-6 text-right backdrop-blur">
              <h2 className="text-xl font-semibold text-white">{section.title}</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-300">{section.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-end gap-3">
          <Link href="/" className="rounded-full border border-embabi-gold/30 px-4 py-2 text-sm text-embabi-gold transition hover:bg-embabi-gold/10">
            العودة إلى الصفحة الرئيسية
          </Link>
        </div>
      </section>
    </main>
  );
}
