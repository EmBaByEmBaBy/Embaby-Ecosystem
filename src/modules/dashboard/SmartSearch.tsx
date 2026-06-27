"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const searchableItems = [
  {
    id: "kids",
    title: "بوابة تأسيس الأطفال",
    description: "محتوى تعليمي، حروف النور، وأنشطة لغوية",
    href: "/kids-hub",
    category: "Kids Hub",
  },
  {
    id: "media",
    title: "استوديو المبدعين",
    description: "معرض الأعمال الفنية ومكتبة الفيديوهات التعليمية",
    href: "/media-studio",
    category: "Media Studio",
  },
  {
    id: "knowledge",
    title: "بوابة الاهتمامات/إدارة المعرفة",
    description: "خرائط ذهنية، محتوى علمي، وتوصيات مخصصة",
    href: "/knowledge-engine",
    category: "Knowledge Engine",
  },
  {
    id: "debate",
    title: "ميدان المناظرة",
    description: "مناقشات موجهة، نقاشات منظمة، وتفكير نقدي",
    href: "/debate-arena",
    category: "Debate Arena",
  },
  {
    id: "about",
    title: "عن المنصة",
    description: "رسالة المنصة، رؤيتها، والتزامها التربوي",
    href: "/about",
    category: "Information",
  },
  {
    id: "terms",
    title: "الخصوصية والشروط",
    description: "الضوابط الشرعية والتربوية والسياسات الرسمية",
    href: "/terms",
    category: "Information",
  },
];

export function SmartSearch() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return [];

    return searchableItems.filter((item) => {
      const haystack = `${item.title} ${item.description} ${item.category}`.toLowerCase();
      return haystack.includes(normalizedQuery);
    });
  }, [query]);

  return (
    <div className="relative w-full max-w-2xl">
      <label className="block text-right">
        <span className="mb-2 block text-sm text-embabi-silver">بحث سريع</span>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="ابحث في البوابات والخدمات..."
          className="w-full rounded-2xl border border-white/10 bg-embabi-surface/70 px-4 py-3 text-right text-white outline-none transition focus:border-embabi-gold focus:ring-2 focus:ring-embabi-gold/30"
        />
      </label>

      {results.length > 0 ? (
        <div className="absolute left-0 right-0 z-20 mt-2 rounded-2xl border border-embabi-gold/20 bg-black/90 p-3 shadow-[0_0_40px_rgba(212,175,55,0.16)] backdrop-blur">
          {results.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="mb-2 flex flex-col rounded-xl border border-white/10 bg-embabi-surface/70 p-3 text-right transition hover:border-embabi-gold/30 hover:bg-embabi-gold/10"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs uppercase tracking-[0.3em] text-embabi-gold">{item.category}</span>
                <span className="text-sm font-semibold text-white">{item.title}</span>
              </div>
              <p className="mt-2 text-sm text-zinc-300">{item.description}</p>
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
