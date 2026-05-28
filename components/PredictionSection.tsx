import type { PredictionSnapshot } from '@/types/market';
import { listToText, safeDigitList } from '@/lib/format';
import { CopyButton } from './CopyButton';

type PredictionSectionProps = {
  snapshot?: PredictionSnapshot | null;
};

function DigitPills({ digits }: { digits?: string[] }) {
  const items = safeDigitList(digits);
  if (!items.length) return <div className="text-sm text-slate-500">Belum tersedia</div>;

  return (
    <div className="scroll-thin flex gap-2 overflow-x-auto pb-1">
      {items.map((digit, index) => (
        <span
          key={`${digit}-${index}`}
          className="flex h-10 min-w-10 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-400/10 text-base font-black text-cyan-100"
        >
          {digit}
        </span>
      ))}
    </div>
  );
}

function InvestRow({ label, digits }: { label: string; digits?: string[] }) {
  const text = listToText(digits);

  return (
    <div className="rounded-3xl border border-slate-700/60 bg-slate-950/28 p-4">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="text-xs font-black uppercase tracking-[0.16em] text-slate-300">{label}</div>
        <CopyButton value={text.replace(/\*/g, '')} />
      </div>
      <DigitPills digits={digits} />
    </div>
  );
}

function PoltarRow({ label, digits }: { label: string; digits?: string[] }) {
  return (
    <div>
      <div className="mb-2 text-[11px] font-black uppercase tracking-[0.16em] text-slate-400">
        {label} <span className="text-slate-600">TERKUAT → TERLEMAH</span>
      </div>
      <DigitPills digits={digits} />
    </div>
  );
}

export function PredictionSection({ snapshot }: PredictionSectionProps) {
  const topLine = Array.isArray(snapshot?.top_line) ? snapshot.top_line.join('*') : '-';

  return (
    <div className="space-y-4">
      <section className="glass-card rounded-3xl p-4">
        <div className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-slate-200">Poltar 4D</div>
        <div className="space-y-4">
          <PoltarRow label="AS" digits={snapshot?.poltar_as} />
          <PoltarRow label="KOP" digits={snapshot?.poltar_kop} />
          <PoltarRow label="KEPALA" digits={snapshot?.poltar_kepala} />
          <PoltarRow label="EKOR" digits={snapshot?.poltar_ekor} />
        </div>
      </section>

      <section className="glass-card rounded-3xl p-4">
        <div className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-slate-200">Pilihan Invest</div>
        <div className="space-y-3">
          <InvestRow label="Angka Ikut 4 Digit" digits={snapshot?.ai4} />
          <InvestRow label="Control 6 Digit" digits={snapshot?.ai6} />
          <InvestRow label="BBFS 8 Digit" digits={snapshot?.bbfs8} />
        </div>
      </section>

      <section className="glass-card rounded-3xl p-4">
        <div className="mb-3 flex items-center justify-between gap-3">
          <div className="text-xs font-black uppercase tracking-[0.18em] text-slate-200">Top Line</div>
          <CopyButton value={topLine} />
        </div>
        <div className="break-words rounded-2xl border border-slate-700/60 bg-slate-950/30 p-3 text-sm font-black leading-7 tracking-wide text-cyan-100">
          {topLine}
        </div>
      </section>
    </div>
  );
}
