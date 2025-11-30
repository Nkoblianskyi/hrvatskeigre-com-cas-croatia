"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, Star } from "lucide-react"
import { topCasino } from "@/lib/casinos"

export function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    {
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 8500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
  }

  if (!isOpen) return null

  const casino = topCasino

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden animate-in fade-in zoom-in duration-300">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-stone-100 hover:bg-stone-200 transition-colors"
        >
          <X className="w-4 h-4 text-stone-600" />
        </button>

        {/* Header badge */}
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 py-2 px-4 text-center">
          <span className="text-white font-semibold text-sm tracking-wide uppercase">Najbolji Izbor</span>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col items-center text-center">
          {/* Logo */}
          <div className="w-46 h-24 relative mb-4">
            <Image src={casino.logo || "/placeholder.svg"} alt={casino.name} fill className="object-contain" />
          </div>

          {/* Casino name */}
          <h3 className="text-2xl font-bold text-stone-800 mb-2">{casino.name}</h3>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-1">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < Math.round(casino.rating / 2)
                      ? "fill-amber-400 text-amber-400"
                      : "fill-stone-200 text-stone-200"
                    }`}
                />
              ))}
            </div>
            <span className="text-lg font-bold text-stone-800">{casino.rating}</span>
          </div>

          {/* Reviews */}
          <p className="text-stone-500 text-sm mb-5">{casino.votes.toLocaleString()} recenzija</p>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent mb-5" />

          {/* Bonus */}
          <p className="text-stone-500 text-sm mb-2">Bonus Dobrodošlice</p>
          <p className="text-2xl font-bold text-stone-800 mb-5 leading-tight">{casino.bonus}</p>

          {/* CTA Button */}
          <a
            href={casino.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClose}
            className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40"
          >
            Posjeti Kasino
          </a>

          {/* Terms */}
          <p className="text-xs text-stone-400 mt-4 leading-relaxed">{casino.terms}</p>
        </div>
      </div>
    </div>
  )
}
