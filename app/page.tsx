import Hero from "@/components/Hero"
import Features from "@/components/Features"
import CTA from "@/components/CTA"

export default function Home() {
  return (
    <main className="min-h-screen bg-ink-black">
      <Hero />
      <Features />
      <CTA />

      {/* Footer */}
      <footer className="border-t border-cyan-500/10 bg-ink-black py-8">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          <p>&copy; 2026 Goon. All rights reserved. Built for retail traders.</p>
        </div>
      </footer>
    </main>
  )
}
