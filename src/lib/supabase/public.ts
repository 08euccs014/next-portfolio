import { createClient } from "@supabase/supabase-js";
import { getSupabaseEnv, isSupabaseConfigured } from "@/lib/supabase/env";

/** Cookie-less client for public reads (ISR, generateStaticParams, generateMetadata). */
export function createPublicClient() {
  if (!isSupabaseConfigured()) {
    throw new Error("Supabase is not configured");
  }

  const { url, anonKey } = getSupabaseEnv();
  return createClient(url!, anonKey!);
}
