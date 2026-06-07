import type { Metadata } from "next"
import { Space_Grotesk, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Goon - AI Stock Predictor for Retail Traders",
  description:
    "Make data-driven investment decisions with AI-powered stock predictions. Real-time signals, predictive analytics, and intelligent insights for retail traders.",
  keywords: ["stock predictor", "AI trading", "retail traders", "stock predictions", "trading signals"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-ink-black text-white font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
