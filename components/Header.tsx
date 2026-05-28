export function Header() {
  return (
    <header className="px-4 pt-5 pb-4">
      <div className="glass-card rounded-3xl px-4 py-4">
        <div className="flex items-center justify-between gap-3">
          <div className="text-2xl font-black tracking-wide text-slate-50">
            ANGKA <span className="text-cyan-400">PRO</span>
          </div>
          <div className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-[10px] font-black tracking-[0.18em] text-cyan-200">
            QUANTUM CORE
          </div>
        </div>
        <div className="mt-1 text-xs text-slate-400">Data-driven numerical analysis system</div>
      </div>
    </header>
  );
}
