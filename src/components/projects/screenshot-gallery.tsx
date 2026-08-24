"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import type { Screenshot } from "@/types/project";

export function ScreenshotGallery({ screenshots }: { screenshots: Screenshot[] }) {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") {
        setActive((index) =>
          index === null ? 0 : (index + 1) % screenshots.length
        );
      }
      if (event.key === "ArrowLeft") {
        setActive((index) =>
          index === null ? 0 : (index - 1 + screenshots.length) % screenshots.length
        );
      }
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, screenshots.length]);

  if (screenshots.length === 0) return null;

  const current = active !== null ? screenshots[active] : null;

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2">
        {screenshots.map((shot, index) => (
          <button
            key={`${shot.url}-${index}`}
            type="button"
            onClick={() => setActive(index)}
            className="group text-left"
          >
            <figure className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={shot.url}
                  alt={shot.caption || `Screenshot ${index + 1}`}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              {shot.caption && (
                <figcaption className="px-4 py-3 text-sm text-gray-600">
                  {shot.caption}
                </figcaption>
              )}
            </figure>
          </button>
        ))}
      </div>

      {current && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Screenshot preview"
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            onClick={() => setActive(null)}
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <div
            className="relative max-h-[90vh] w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-black">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={current.url}
                alt={current.caption || "Screenshot"}
                className="h-full w-full object-contain"
              />
            </div>
            {current.caption && (
              <p className="mt-3 text-center text-sm text-white/80">{current.caption}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
