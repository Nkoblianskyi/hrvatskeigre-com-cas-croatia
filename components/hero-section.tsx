"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-[420px] md:min-h-[480px] bg-secondary overflow-hidden pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90" />

        {/* Animated casino elements */}
        {mounted && (
          <>
            {/* Floating cards */}
            <div className="absolute top-20 left-[10%] animate-float opacity-20">
              <svg width="60" height="80" viewBox="0 0 60 80" fill="none" className="text-primary">
                <rect x="2" y="2" width="56" height="76" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M30 20L35 35H25L30 20Z" fill="currentColor" />
                <path d="M30 60L25 45H35L30 60Z" fill="currentColor" />
              </svg>
            </div>

            <div
              className="absolute top-40 right-[15%] animate-float-reverse opacity-15"
              style={{ animationDelay: "1s" }}
            >
              <svg width="50" height="70" viewBox="0 0 60 80" fill="none" className="text-accent">
                <rect x="2" y="2" width="56" height="76" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
                <circle cx="30" cy="25" r="8" fill="currentColor" />
                <circle cx="30" cy="55" r="8" fill="currentColor" />
              </svg>
            </div>

            {/* Casino chips */}
            <div className="absolute bottom-20 left-[20%] animate-chip-spin opacity-20">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" className="text-primary">
                <circle cx="25" cy="25" r="23" stroke="currentColor" strokeWidth="2" fill="none" />
                <circle cx="25" cy="25" r="15" stroke="currentColor" strokeWidth="2" fill="none" />
                <circle cx="25" cy="25" r="5" fill="currentColor" />
              </svg>
            </div>

            <div className="absolute top-32 right-[25%] opacity-15" style={{ animationDelay: "2s" }}>
              <svg width="40" height="40" viewBox="0 0 50 50" fill="none" className="text-accent animate-chip-spin">
                <circle cx="25" cy="25" r="23" stroke="currentColor" strokeWidth="2" fill="none" />
                <circle cx="25" cy="25" r="15" stroke="currentColor" strokeWidth="2" fill="none" />
                <circle cx="25" cy="25" r="5" fill="currentColor" />
              </svg>
            </div>

            {/* Dice */}
            <div className="absolute bottom-32 right-[10%] animate-dice-roll opacity-20">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-primary">
                <rect x="2" y="2" width="36" height="36" rx="6" stroke="currentColor" strokeWidth="2" fill="none" />
                <circle cx="12" cy="12" r="3" fill="currentColor" />
                <circle cx="28" cy="12" r="3" fill="currentColor" />
                <circle cx="20" cy="20" r="3" fill="currentColor" />
                <circle cx="12" cy="28" r="3" fill="currentColor" />
                <circle cx="28" cy="28" r="3" fill="currentColor" />
              </svg>
            </div>

            {/* Shimmer lines */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-shimmer" />
            <div
              className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent animate-shimmer"
              style={{ animationDelay: "1.5s" }}
            />
          </>
        )}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 h-full relative z-10">
        <div className="flex flex-col justify-center items-center text-center py-16 md:py-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs text-primary-foreground/90 font-medium tracking-wide uppercase">
              Ažurirano 2025
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground mb-4 leading-tight">
            Najbolji Kasini
            <br />
            <span className="text-primary">u Hrvatskoj</span>
          </h1>

          {/* Subheading */}
          <p className="text-secondary-foreground/70 text-sm md:text-base max-w-xl mb-8 leading-relaxed">
            Ekskluzivne recenzije i provjereni bonusi od stručnjaka. Pronađite savršen kasino za sigurnu i zabavnu igru.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs text-secondary-foreground/60">
            <span className="flex items-center gap-1.5">
              <Image src="/flag.png" alt="Trustpilot" width={20} height={20} />
              Licencirano
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              SSL Sigurnost
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              18+
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Brze Isplate
            </span>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full h-auto">
          <path d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z" fill="var(--background)" />
        </svg>
      </div>
    </section>
  )
}
