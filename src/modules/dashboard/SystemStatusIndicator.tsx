export function SystemStatusIndicator() {
  return (
    <div className="flex items-center gap-3 rounded-full border border-embabi-gold/30 bg-embabi-gold/10 px-4 py-2 text-sm text-embabi-ivory">
      <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(74,222,128,0.9)]" />
      <span className="font-semibold">Live</span>
      <span className="text-zinc-300">Ready</span>
    </div>
  );
}
