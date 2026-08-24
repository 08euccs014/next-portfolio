"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";

export function AdminShell({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  async function signOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-6">
            <Link href="/admin/projects" className="font-semibold text-[#4A4E8C]">
              Admin
            </Link>
            <Link
              href="/admin/projects"
              className="text-sm text-gray-600 hover:text-[#4A4E8C]"
            >
              Projects
            </Link>
            <Link
              href="/admin/journey"
              className="text-sm text-gray-600 hover:text-[#4A4E8C]"
            >
              Journey
            </Link>
            <Link
              href="/admin/projects/new"
              className="text-sm text-gray-600 hover:text-[#4A4E8C]"
            >
              New project
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/" target="_blank">
                View site
              </Link>
            </Button>
            <Button variant="outline" size="sm" onClick={signOut}>
              Sign out
            </Button>
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-6xl px-4 py-8">{children}</div>
    </div>
  );
}
