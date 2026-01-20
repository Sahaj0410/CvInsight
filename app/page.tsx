import Link from "next/link";
import { TextScramble } from "@/components/ui/text-scramble"
import { ImageUploadDemo } from "@/components/image-upload-demo";
import { LiquidButton } from "@/components/liquid-glass-button";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-16 text-center">
      <div className="pointer-events-none absolute inset-0">
        <FlickeringGrid
          className="absolute inset-0 size-full"
          squareSize={4}
          gridGap={6}
          color="#6B7280"
          maxOpacity={0.5}
          flickerChance={0.1}
        />
      </div>
      <div className="mt-10 relative z-10 max-w-2xl space-y-8">
        <div className="flex justify-center">
          <TextScramble className="text-4xl font-bold uppercase tracking-tight sm:text-5xl">
            Get Your Resume Reviewed by AI — Fast, Honest, and Free!
          </TextScramble>
        </div>
        <p className="text-lg text-muted-foreground">
          Upload your resume and receive a clear, structured review focused on improving clarity, impact, and job relevance.
CvInsight analyzes your resume against industry standards and hiring expectations, highlighting strengths, identifying gaps, and suggesting actionable improvements to help you stand out in today’s competitive job market.
        </p>
        <div className="flex justify-center">
          <ImageUploadDemo />
        </div>
        <p className="text-lg text-muted-foreground">
          Or Click
        </p>
        <div className="flex justify-center">
          <LiquidButton asChild size="xl" className="font-semibold">
            <Link href="/review">Ask questions here</Link>
          </LiquidButton>
        </div>
      </div>
    </main>
  );
}

