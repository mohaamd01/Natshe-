import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// ── Public types ──────────────────────────────────────────────────────────────

export interface Review {
  id: string;
  name: string | null;
  country_city: string | null;
  product_purchased: string | null;
  rating: number;
  message: string;
  approved: boolean;
  created_at: string;
}

export interface ReviewInsert {
  rating: number;
  message: string;
  name?: string | null;
  country_city?: string | null;
  product_purchased?: string | null;
}

// ── Lazy singleton ────────────────────────────────────────────────────────────
// We defer creation until first use so that the Next.js static-analysis
// pass (which runs without env vars) does not throw at module-load time.

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let _client: SupabaseClient<any> | null = null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getSupabase(): SupabaseClient<any> {
  if (_client) return _client;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error(
      "Missing Supabase environment variables. " +
        "Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY " +
        "to .env.local (local) and to Vercel → Settings → Environment Variables (production)."
    );
  }

  _client = createClient(url, key);
  return _client;
}
