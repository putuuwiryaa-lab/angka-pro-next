import type { Market } from '@/types/market';

const MARKETS_ENDPOINT = 'https://ldeofmwxttdjcvylhabu.supabase.co/functions/v1/get-markets';

export async function fetchMarkets(): Promise<Market[]> {
  const response = await fetch(MARKETS_ENDPOINT, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch markets: ${response.status}`);
  }

  const payload = await response.json();

  if (Array.isArray(payload)) return payload as Market[];
  if (Array.isArray(payload?.markets)) return payload.markets as Market[];
  if (Array.isArray(payload?.data)) return payload.data as Market[];

  return [];
}
