import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-black">
      {/* Background ledger pattern */}
      <div className="absolute inset-0 bg-ledger opacity-30" />

      {/* Gradient orbs */}
      <div className="absolute left-1/4 top-20 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />
      <div className="absolute right-1/4 top-40 h-96 w-96 rounded-full bg-electric-teal/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 text-sm text-cyan-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400"></span>
            </span>
            AI-Powered Stock Predictions Now in Beta
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Trade with
            <br />
            <span className="text-gradient glow-cyan">AI Precision</span>
          </h1>

          {/* Value prop */}
          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-400 sm:text-xl">
            Goon analyzes millions of data points to predict stock movements before they happen.
            Get the edge that institutional traders have—now available for retail.
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#waitlist"
              className="group relative inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-electric-teal px-8 py-4 text-base font-semibold text-white transition-all hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Join the Waitlist
              <svg
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>

            <Link
              href="#features"
              className="inline-flex items-center justify-center rounded-lg border border-cyan-500/20 bg-cyan-500/5 px-8 py-4 text-base font-semibold text-cyan-400 transition-all hover:bg-cyan-500/10"
            >
              See How It Works
            </Link>
          </div>

          {/* Social proof */}
          <div className="mt-16 flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>10,000+ traders on waitlist</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-electric-teal" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Bank-grade security</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
