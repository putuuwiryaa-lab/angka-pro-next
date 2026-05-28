'use client';

import { useEffect, useMemo, useState } from 'react';
import type { Market } from '@/types/market';
import { fetchMarkets } from '@/lib/api';
import { formatSyncTime } from '@/lib/format';
import { Header } from '@/components/Header';
import { PremiumBanner } from '@/components/PremiumBanner';
import { SearchBar } from '@/components/SearchBar';
import { MarketCard } from '@/components/MarketCard';
import { ResultPanel } from '@/components/ResultPanel';

export default function HomePage() {
  const [markets, setMarkets] = useState<Market[]>([]);
  const [query, setQuery] = useState('');
  const [selectedMarket, setSelectedMarket] = useState<Market | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function loadMarkets() {
    try {
      setError(null);
      setLoading(true);
      const data = await fetchMarkets();
      setMarkets(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Gagal memuat data.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadMarkets();
  }, []);

  const filteredMarkets = useMemo(() => {
    const keyword = query.trim().toLowerCase();
    if (!keyword) return markets;
    return markets.filter((market) => String(market.name || '').toLowerCase().includes(keyword));
  }, [markets, query]);

  const lastUpdated = useMemo(() => {
    const dates = markets
      .map((market) => market.updated_at || market.prediction_snapshot?.updated_at)
      .filter(Boolean) as string[];

    return dates.sort((a, b) => new Date(b).getTime() - new Date(a).getTime())[0];
  }, [markets]);

  return (
    <div className="app-shell">
      <Header />
      <PremiumBanner />

      <div className="mx-4 mt-4 rounded-3xl border border-cyan-300/20 bg-cyan-400/10 p-4">
        <div className="w-fit rounded-full border border-cyan-200/25 bg-cyan-400/15 px-3 py-1 text-[10px] font-black tracking-[0.18em] text-cyan-100">
          MESIN BARU
        </div>
        <div className="mt-2 text-xs leading-relaxed text-slate-300">
          Mesin analisa telah diganti ke sistem Hybrid Scoring. Evaluasi lama direset dan akan dihitung ulang dari data terbaru.
        </div>
      </div>

      <SearchBar value={query} onChange={setQuery} />

      <div className="mx-4 mt-4 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.14em] text-slate-400">
        <div className="rounded-full border border-slate-700/70 bg-slate-950/40 px-3 py-2">Pasaran: <span className="text-slate-100">{markets.length}</span></div>
        <div className="rounded-full border border-slate-700/70 bg-slate-950/40 px-3 py-2">Sync: <span className="text-slate-100">{formatSyncTime(lastUpdated)}</span></div>
        <button type="button" onClick={loadMarkets} className="ml-auto rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-2 text-cyan-100 active:scale-95">
          SYNC
        </button>
      </div>

      <main className="px-4 pt-4">
        {loading ? (
          <div className="glass-card rounded-3xl p-6 text-center text-sm font-semibold text-slate-400">Memuat data pasaran...</div>
        ) : error ? (
          <div className="glass-card rounded-3xl p-6 text-center">
            <div className="font-black text-red-300">Gagal memuat data</div>
            <div className="mt-2 text-sm text-slate-400">{error}</div>
          </div>
        ) : filteredMarkets.length ? (
          <div className="grid grid-cols-2 gap-3">
            {filteredMarkets.map((market, index) => (
              <MarketCard key={market.id || market.name} market={market} index={index} onOpen={setSelectedMarket} />
            ))}
          </div>
        ) : (
          <div className="glass-card rounded-3xl p-6 text-center text-sm font-semibold text-slate-400">Tidak ada pasaran ditemukan.</div>
        )}
      </main>

      <ResultPanel market={selectedMarket} onClose={() => setSelectedMarket(null)} />
    </div>
  );
}
