"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/98 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image src="/favicon.ico" alt="Logo" width={40} height={40} />
            <span className="text-xl font-semibold tracking-tight">
              <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
                Hrvatske
              </span>
              <span className="text-red-900">Igre</span>
            </span>
          </Link>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-in slide-in-from-top-2">
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-2 text-sm hover:bg-muted rounded-lg"
              >
                Početna
              </Link>
              <Link
                href="/o-nama"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-2 text-sm hover:bg-muted rounded-lg"
              >
                O nama
              </Link>
              <Link
                href="/odgovorno-kockanje"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-2 text-sm hover:bg-muted rounded-lg"
              >
                Odgovorna igra
              </Link>
              <Link
                href="/politika-privatnosti"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-2 text-sm hover:bg-muted rounded-lg"
              >
                Privatnost
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
