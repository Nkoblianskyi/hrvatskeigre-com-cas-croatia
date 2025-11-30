"use client"

import Image from "next/image"
import { Star } from "lucide-react"
import { topCasino } from "@/lib/casinos"

export function OurChoiceSection() {
  return (
    <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-stone-50 to-white">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-amber-600 text-sm font-semibold tracking-widest uppercase mb-2 block">Naš Izbor</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Preporučeni Kasino <span className="text-amber-600">2024</span>
          </h2>
        </div>

        {/* Featured Card - restructured layout with centered bonus */}
        <div className="bg-white rounded-2xl border border-stone-200 shadow-xl overflow-hidden">
          {/* Top gold bar */}
          <div className="h-1.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400" />

          <div className="p-8 md:p-10">
            {/* Top row: Logo and Rating */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
              {/* Logo */}
              <div className="flex items-center gap-5">
                <div className="w-36 h-20 bg-stone-50 rounded-xl border border-stone-100 flex items-center justify-center p-3">
                  <Image
                    src={topCasino.logo || "/placeholder.svg"}
                    alt={topCasino.name}
                    width={120}
                    height={60}
                    className="object-contain max-h-full"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{topCasino.name}</h3>
                  {/* Rating */}
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(topCasino.rating / 2)
                              ? "text-amber-400 fill-amber-400"
                              : "text-stone-200 fill-stone-200"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-lg font-bold text-foreground">{topCasino.rating}</span>
                    <span className="text-sm text-muted-foreground">/10</span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="flex flex-wrap justify-center gap-3 text-sm">
                <span className="px-3 py-1 bg-stone-100 text-stone-600 rounded-full">Licencirano</span>
                <span className="px-3 py-1 bg-stone-100 text-stone-600 rounded-full">Brze Isplate</span>
                <span className="px-3 py-1 bg-stone-100 text-stone-600 rounded-full">VIP Program</span>
              </div>
            </div>

            <div className="text-center py-8 border-y border-stone-100">
              <p className="text-sm text-amber-600 font-semibold uppercase tracking-widest mb-3">Bonus Dobrodošlice</p>
              <p className="text-3xl font-bold text-foreground leading-tight">
                {topCasino.bonus}
              </p>
            </div>

            {/* Bottom: CTA and terms */}
            <div className="flex flex-col items-center mt-8">
              <a
                href={topCasino.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 hover:bg-amber-600 text-white font-semibold text-lg px-12 py-4 rounded-xl transition-colors duration-200 shadow-lg shadow-amber-500/20"
              >
                Posjeti Kasino
              </a>

              <p className="text-xs text-muted-foreground mt-4 max-w-md text-center leading-relaxed">
                {topCasino.terms}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
