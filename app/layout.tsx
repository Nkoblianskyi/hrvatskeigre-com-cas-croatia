import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { CookieBanner } from "@/components/cookie-banner"
import "./globals.css"

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "HrvatskeIgre | Najbolji Online Kasino Vodič u Hrvatskoj 2025",
  description:
    "Otkrijte najbolje licencirane online kasine u Hrvatskoj. Ekskluzivne recenzije, vrhunski bonusi i sigurna igra na hrvatskeigre.com.",
  keywords: [
    "hrvatske igre",
    "online kasino hrvatska",
    "kasino recenzije",
    "bonus dobrodošlice",
    "sigurno kockanje",
    "licencirana kasina",
    "hrvatskeigre",
    "online igre hrvatska",
  ],
  authors: [{ name: "HrvatskeIgre", url: "https://hrvatskeigre.com" }],
  creator: "HrvatskeIgre",
  publisher: "HrvatskeIgre",
  applicationName: "HrvatskeIgre",
  metadataBase: new URL("https://hrvatskeigre.com"),
  openGraph: {
    title: "HrvatskeIgre | Najbolji Online Kasino Vodič 2025",
    description: "Ekskluzivne recenzije i vrhunski bonusi za hrvatske igrače",
    url: "https://hrvatskeigre.com",
    siteName: "HrvatskeIgre",
    locale: "hr_HR",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hr">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  )
}
