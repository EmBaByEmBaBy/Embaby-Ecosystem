"use client";

import Link from "next/link";

const showcases = [
  {
    title: "معرض الأعمال الفنية",
    subtitle: "عرض بصري أنيق للأعمال الإبداعية والرسوم",
    type: "Visual",
  },
  {
    title: "مكتبة الفيديوهات التعليمية",
    subtitle: "محتوى مرئي مدروس دون موسيقى، مع شرح واضح",
    type: "Video",
  },
  {
    title: "سرد الإبداع",
    subtitle: "تجارب إبداعية مرتبة ومصنفة لسهولة المتابعة",
    type: "Story",
  },
];

export function MediaStudioPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.16),_transparent_28%),linear-gradient(135deg,_#050505,_#111111)] px-6 py-10 sm:px-10 lg:px-16">
      <section className="mx-auto max-w-7xl rounded-[32px] border border-white/10 bg-black/45 p-8 shadow-[0_0_140px_rgba(212,175,55,0.16)] backdrop-blur-2xl sm:p-10 lg:p-14">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl text-right">
            <p className="text-sm uppercase tracking-[0.45em] text-embabi-gold">Media Studio</p>
            <h1 className="mt-4 font-serif text-4xl text-white sm:text-5xl">
              استوديو المبدعين
            </h1>
            <p className="mt-4 text-lg leading-8 text-zinc-300">
              فضاء إبداعي فاخر يعرض الأعمال الفنية ومحتوى الفيديوهات التعليمية بلمسة فنية دقيقة وهادئة.
            </p>
          </div>

          <div className="rounded-2xl border border-embabi-silver/20 bg-embabi-surface/70 px-5 py-4 text-sm text-embabi-ivory">
            <p className="font-semibold">النمط المعتمد</p>
            <p className="mt-2 text-zinc-300">محتوى بصري بارد ومهني، خالٍ من الموسيقى، مع تركيز على الجمال والوضوح.</p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {showcases.map((item) => (
            <article key={item.title} className="rounded-[24px] border border-white/10 bg-embabi-surface/70 p-6 text-right backdrop-blur">
              <p className="text-sm uppercase tracking-[0.35em] text-embabi-silver">{item.type}</p>
              <h2 className="mt-4 text-xl font-semibold text-white">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-300">{item.subtitle}</p>
              <button className="mt-5 rounded-full border border-embabi-gold/30 px-4 py-2 text-sm text-embabi-gold transition hover:bg-embabi-gold/10">
                عرض التفاصيل
              </button>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-end gap-3">
          <Link href="/dashboard" className="rounded-full border border-embabi-gold/30 px-4 py-2 text-sm text-embabi-gold transition hover:bg-embabi-gold/10">
            العودة إلى لوحة التحكم
          </Link>
        </div>
      </section>
    </main>
  );
}
