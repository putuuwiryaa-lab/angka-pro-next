export function Header() {
  return (
    <header className="px-5 pb-5 pt-8">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-[26px] font-black leading-none tracking-wide text-slate-50">
            ANGKA <span className="text-cyan-400">PRO</span>
          </div>
          <div className="mt-3 text-sm font-medium text-slate-500">Data-driven numerical analysis system</div>
        </div>
        <div className="rounded-full border border-cyan-300/20 bg-blue-500 px-4 py-2 text-[10px] font-black tracking-[0.16em] text-white shadow-[0_0_24px_rgba(59,130,246,0.45)]">
          QUANTUM CORE
        </div>
      </div>
    </header>
  );
}
