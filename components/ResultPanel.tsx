'use client';

import type { Market } from '@/types/market';
import { formatSyncTime, parseHistory } from '@/lib/format';
import { PredictionSection } from './PredictionSection';

type ResultPanelProps = {
  market: Market | null;
  onClose: () => void;
};

export function ResultPanel({ market, onClose }: ResultPanelProps) {
  if (!market) return null;

  const history = parseHistory(market.history_data);
  const snapshot = market.prediction_snapshot;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#03050a]">
      <div className="sticky top-0 z-10 border-b border-slate-800/80 bg-slate-950/90 px-4 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[520px] items-center gap-3">
          <button
            type="button"
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-700/70 bg-slate-900/80 text-xl font-black text-slate-100 active:scale-95"
            aria-label="Kembali"
          >
            ←
          </button>
          <div className="min-w-0">
            <div className="truncate text-lg font-black uppercase tracking-wide text-slate-50">{market.name}</div>
            <div className="text-xs font-semibold text-slate-500">Update: {formatSyncTime(snapshot?.updated_at || market.updated_at)}</div>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-[520px] space-y-4 px-4 py-4">
        <section className="glass-card rounded-3xl p-4">
          <div className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">Result Terakhir</div>
          <div className="mt-2 text-4xl font-black tracking-[0.24em] text-cyan-300">{market.last_result || snapshot?.base_result || '----'}</div>
          <div className="mt-2 text-xs text-slate-500">Data tersedia: {history.length} result</div>
        </section>

        {history.length < 21 ? (
          <section className="glass-card rounded-3xl p-5 text-center">
            <div className="text-lg font-black text-slate-100">DATA BELUM CUKUP</div>
            <div className="mt-2 text-sm text-slate-400">Minimal 21 result untuk analisa awal.</div>
          </section>
        ) : (
          <PredictionSection snapshot={snapshot} />
        )}
      </main>
    </div>
  );
}
