import { Suspense } from "react";
import { LoginForm } from "@/components/admin/login-form";

export const metadata = {
  title: "Admin login",
};

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8FAFC] px-4">
      <div className="w-full max-w-md rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#EC4899]">
          Studio
        </p>
        <h1 className="mt-2 text-2xl font-bold text-gray-900">Sign in</h1>
        <p className="mt-2 mb-6 text-sm text-gray-600">
          Manage case studies, screenshots, and tech stacks.
        </p>
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}
