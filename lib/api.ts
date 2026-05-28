import type { Market } from '@/types/market';

export async function fetchMarkets(): Promise<Market[]> {
  const response = await fetch('/api/markets', {
    cache: 'no-store',
  });

  if (!response.ok) {
    let message = `Failed to fetch markets: ${response.status}`;

    try {
      const payload = await response.json();
      if (payload?.message) message = payload.message;
    } catch {
      // Keep default message.
    }

    throw new Error(message);
  }

  const payload = await response.json();

  if (Array.isArray(payload)) return payload as Market[];
  if (Array.isArray(payload?.markets)) return payload.markets as Market[];
  if (Array.isArray(payload?.data)) return payload.data as Market[];

  return [];
}
