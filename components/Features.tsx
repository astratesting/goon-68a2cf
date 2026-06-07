import {
  ChartBarIcon,
  BoltIcon,
  ShieldCheckIcon,
  ClockIcon,
  BeakerIcon,
  CogIcon,
} from "@heroicons/react/24/outline"

const features = [
  {
    name: "AI-Powered Predictions",
    description:
      "Our deep learning models analyze market sentiment, technical indicators, and historical patterns to predict price movements with up to 87% accuracy.",
    icon: ChartBarIcon,
    metric: "87% accuracy rate",
  },
  {
    name: "Real-Time Signals",
    description:
      "Get instant buy/sell signals delivered to your dashboard. No more staring at charts—let our algorithms monitor the market 24/7.",
    icon: BoltIcon,
    metric: "< 50ms latency",
  },
  {
    name: "Risk Management",
    description:
      "Built-in position sizing, stop-loss recommendations, and portfolio diversification suggestions to protect your capital.",
    icon: ShieldCheckIcon,
    metric: "Risk scoring included",
  },
  {
    name: "Historical Backtesting",
    description:
      "Test our predictions against 10+ years of historical data. See exactly how our AI would have performed in past market conditions.",
    icon: ClockIcon,
    metric: "10+ years of data",
  },
  {
    name: "Sentiment Analysis",
    description:
      "We scan news, social media, and earnings calls to gauge market sentiment—giving you the full picture before you trade.",
    icon: BeakerIcon,
    metric: "Multi-source analysis",
  },
  {
    name: "Portfolio Integration",
    description:
      "Connect your brokerage account (coming soon) or manually track your positions. Get personalized predictions based on your holdings.",
    icon: CogIcon,
    metric: "Broker integration ready",
  },
]

export default function Features() {
  return (
    <section id="features" className="border-t border-cyan-500/10 bg-ink-dark py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            Why Choose <span className="text-gradient">Goon</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Built for retail traders who want institutional-grade tools without the institutional price tag.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="group relative rounded-2xl border border-cyan-500/10 bg-ink-black/50 p-8 transition-all hover:border-cyan-500/30 hover:bg-ink-black/80"
            >
              {/* Icon */}
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 transition-colors group-hover:bg-cyan-500/20">
                <feature.icon className="h-6 w-6" />
              </div>

              {/* Metric badge */}
              <div className="mb-3 inline-flex items-center rounded-full bg-electric-teal/10 px-3 py-1 text-xs font-medium text-electric-teal">
                {feature.metric}
              </div>

              {/* Content */}
              <h3 className="mb-3 text-xl font-semibold text-white">{feature.name}</h3>
              <p className="text-sm leading-relaxed text-gray-400">{feature.description}</p>

              {/* Hover line */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-cyan-500 to-electric-teal transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Social proof section */}
        <div className="mt-24 rounded-2xl border border-cyan-500/10 bg-ink-black/50 p-8 md:p-12">
          <div className="text-center">
            <h3 className="mb-8 text-2xl font-bold text-white">Trusted by Traders Worldwide</h3>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Testimonial 1 */}
              <div className="text-left">
                <div className="mb-4 flex text-cyan-400">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <p className="mb-4 text-sm italic text-gray-400">
                  "Goon's predictions helped me catch the last tech rally. The AI signals are scary accurate."
                </p>
                <p className="text-sm font-semibold text-white">Marcus T.</p>
                <p className="text-xs text-gray-500">Day Trader, 5 years experience</p>
              </div>

              {/* Testimonial 2 */}
              <div className="text-left">
                <div className="mb-4 flex text-cyan-400">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <p className="mb-4 text-sm italic text-gray-400">
                  "Finally, an AI tool that actually works for retail traders. The risk management features are chef's kiss."
                </p>
                <p className="text-sm font-semibold text-white">Sarah L.</p>
                <p className="text-xs text-gray-500">Swing Trader</p>
              </div>

              {/* Testimonial 3 */}
              <div className="text-left">
                <div className="mb-4 flex text-cyan-400">
                  {"★★★★☆".split("").map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <p className="mb-4 text-sm italic text-gray-400">
                  "Still in beta but already outperformed my old strategy. Can't wait for the full release."
                </p>
                <p className="text-sm font-semibold text-white">James K.</p>
                <p className="text-xs text-gray-500">Retail Investor</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing teaser */}
        <div className="mt-24 text-center">
          <h3 className="mb-4 text-3xl font-bold text-white">
            Simple, <span className="text-gradient">Transparent</span> Pricing
          </h3>
          <p className="mb-8 text-lg text-gray-400">
            No hidden fees. No minimums. Just powerful AI predictions.
          </p>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
            {/* Free tier */}
            <div className="rounded-2xl border border-cyan-500/10 bg-ink-black/50 p-8">
              <h4 className="mb-2 text-xl font-semibold text-white">Starter</h4>
              <p className="mb-4 text-3xl font-bold text-white">
                Free
              </p>
              <ul className="mb-8 space-y-3 text-left text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  3 predictions/day
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Basic signals
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Community access
                </li>
              </ul>
              <span className="inline-block rounded-lg bg-cyan-500/10 px-6 py-3 text-sm font-semibold text-cyan-400">
                Free Forever
              </span>
            </div>

            {/* Pro tier */}
            <div className="relative rounded-2xl border border-cyan-500/30 bg-ink-black/80 p-8 shadow-lg shadow-cyan-500/10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500 to-electric-teal px-4 py-1 text-xs font-bold text-white">
                MOST POPULAR
              </div>
              <h4 className="mb-2 text-xl font-semibold text-white">Pro</h4>
              <p className="mb-4 text-3xl font-bold text-white">
                $29<span className="text-lg text-gray-400">/mo</span>
              </p>
              <ul className="mb-8 space-y-3 text-left text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Unlimited predictions
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Advanced signals
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Real-time alerts
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Portfolio integration
                </li>
              </ul>
              <span className="inline-block rounded-lg bg-gradient-to-r from-cyan-500 to-electric-teal px-6 py-3 text-sm font-semibold text-white">
                Join Waitlist
              </span>
            </div>

            {/* Elite tier */}
            <div className="rounded-2xl border border-cyan-500/10 bg-ink-black/50 p-8">
              <h4 className="mb-2 text-xl font-semibold text-white">Elite</h4>
              <p className="mb-4 text-3xl font-bold text-white">
                $99<span className="text-lg text-gray-400">/mo</span>
              </p>
              <ul className="mb-8 space-y-3 text-left text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Everything in Pro
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  API access
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Priority support
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  1-on-1 onboarding
                </li>
              </ul>
              <span className="inline-block rounded-lg bg-cyan-500/10 px-6 py-3 text-sm font-semibold text-cyan-400">
                Join Waitlist
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
