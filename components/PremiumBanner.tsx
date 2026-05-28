export function PremiumBanner() {
  return (
    <a
      href="https://analisaangka.online"
      target="_blank"
      rel="noopener noreferrer"
      className="mx-4 block rounded-3xl border border-amber-300/20 bg-gradient-to-br from-amber-400/14 via-slate-900/80 to-cyan-400/10 p-4 shadow-glow"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full border border-amber-200/25 bg-amber-300/12 px-3 py-1 text-[10px] font-black tracking-[0.18em] text-amber-200">
          PREMIUM
        </span>
        <span className="text-[10px] font-bold tracking-[0.14em] text-cyan-200">BUKA →</span>
      </div>
      <div className="mt-3 text-lg font-black text-slate-50">ANALISA ANGKA</div>
      <div className="mt-1 text-xs leading-relaxed text-slate-300">
        Versi lebih lengkap: Angka Ikut, Angka Mati, Jumlah, Shio & Rekap.
      </div>
    </a>
  );
}
