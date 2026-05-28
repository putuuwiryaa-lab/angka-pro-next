import { NextResponse } from 'next/server';

const MARKETS_ENDPOINT =
  process.env.MARKETS_ENDPOINT ||
  'https://ldeofmwxttdjcvylhabu.supabase.co/functions/v1/get-markets';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const headers: HeadersInit = {
      Accept: 'application/json',
    };

    if (process.env.SUPABASE_ANON_KEY) {
      headers.apikey = process.env.SUPABASE_ANON_KEY;
      headers.Authorization = `Bearer ${process.env.SUPABASE_ANON_KEY}`;
    }

    const response = await fetch(MARKETS_ENDPOINT, {
      method: 'GET',
      headers,
      cache: 'no-store',
    });

    const text = await response.text();

    if (!response.ok) {
      return NextResponse.json(
        {
          error: 'UPSTREAM_ERROR',
          status: response.status,
          message: text || 'Failed to fetch markets from upstream.',
        },
        { status: response.status }
      );
    }

    try {
      return NextResponse.json(JSON.parse(text), {
        headers: {
          'Cache-Control': 'no-store',
        },
      });
    } catch {
      return NextResponse.json(
        {
          error: 'INVALID_JSON',
          message: 'Upstream response is not valid JSON.',
        },
        { status: 502 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        error: 'FETCH_FAILED',
        message: error instanceof Error ? error.message : 'Unknown fetch error.',
      },
      { status: 500 }
    );
  }
}
