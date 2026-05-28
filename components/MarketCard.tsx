import type { Market } from '@/types/market';

type MarketCardProps = {
  market: Market;
  index: number;
  onOpen: (market: Market) => void;
};

const DOT_COLORS = [
  '#f0c040', '#40c0f0', '#f04060', '#f040c0', '#40f0a0', '#f08040',
  '#40a0f0', '#80f040', '#4080f0', '#f0a040', '#00c8a0'
];

export function MarketCard({ market, index, onOpen }: MarketCardProps) {
  const lastResult = market.last_result || '----';

  return (
    <button
      type="button"
      onClick={() => onOpen(market)}
      className="glass-card group min-h-[92px] rounded-3xl p-4 text-left transition active:scale-[0.985]"
    >
      <div className="flex items-center gap-2">
        <span
          className="h-2 w-2 rounded-full shadow-[0_0_16px_currentColor]"
          style={{ background: DOT_COLORS[index % DOT_COLORS.length], color: DOT_COLORS[index % DOT_COLORS.length] }}
        />
        <span className="min-w-0 truncate text-sm font-black uppercase tracking-wide text-slate-100">
          {market.name}
        </span>
      </div>
      <div className="mt-3 pl-4 text-xl font-black tracking-[0.18em] text-cyan-300">
        {lastResult}
      </div>
    </button>
  );
}
