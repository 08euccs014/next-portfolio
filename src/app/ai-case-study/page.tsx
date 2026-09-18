import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "AI Project Case Study | Mohit Agrawal",
  description:
    "Full AI project case study covering the problem, approach, architecture, and outcomes.",
};

const SLIDES = Array.from(
  { length: 13 },
  (_, index) => `/case-study/slide-${String(index + 1).padStart(2, "0")}.jpg`
);

export default function AiCaseStudyPage() {
  return (
    <div className="min-h-screen bg-[#e9e9e9]">
      <Header />
      <main className="pt-16 overflow-x-hidden bg-[#e9e9e9]">
        <h1 className="sr-only">AI Project Case Study</h1>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {SLIDES.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt={`AI project case study, page ${index + 1} of ${SLIDES.length}`}
              width={2560}
              height={1440}
              priority={index === 0}
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="w-full h-auto block"
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
