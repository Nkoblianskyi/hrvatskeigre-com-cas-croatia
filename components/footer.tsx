"use client"

import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-10">
        {/* Main Footer */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 group">
              <Image src="/favicon.ico" alt="Logo" width={40} height={40} />
              <span className="text-xl font-semibold tracking-tight">
                <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
                  Hrvatske
                </span>
                <span className="text-red-900">Igre</span>
              </span>
            </Link>
            <p className="text-xs text-secondary-foreground/60 leading-relaxed">
              Vaš pouzdani vodič kroz svijet online kasina u Hrvatskoj.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Navigacija</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-xs text-secondary-foreground/70 hover:text-primary transition-colors">
                  Početna
                </Link>
              </li>
              <li>
                <Link
                  href="/o-nama"
                  className="text-xs text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  O nama
                </Link>
              </li>
              <li>
                <Link
                  href="/odgovorno-kockanje"
                  className="text-xs text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  Odgovorna igra
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">Pravno</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/politika-privatnosti"
                  className="text-xs text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  Privatnost
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-politika"
                  className="text-xs text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  Kolačići
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">Kontakt</h4>
            <p className="text-xs text-secondary-foreground/70">info@hrvatskeigre.com</p>
          </div>
        </div>

        {/* Responsible Gaming Logos */}
        <div className="flex flex-wrap justify-center items-center gap-6 py-6 border-t border-secondary-foreground/10">
          <Link href="https://www.gamcare.org.uk/" target="_blank" rel="noopener noreferrer">
            <div className="relative w-[120px] h-[56px]  bg-white p-2 rounded-xl transition-opacity">
              <Image src="/gamecare.svg" alt="GamCare" fill className="object-contain p-2" />
            </div>
          </Link>

          <Link href="https://www.gambleaware.org/" target="_blank" rel="noopener noreferrer">
            <div className="relative w-[120px] h-[56px]  bg-white p-2 rounded-xl transition-opacity">
              <Image src="/gamble-aware.webp" alt="GambleAware" fill className="object-contain p-2" />
            </div>
          </Link>

          <Link href="https://www.hupis.hr/klok" target="_blank" rel="noopener noreferrer">
            <div className="relative w-[120px] h-[56px]  bg-white p-2 rounded-xl transition-opacity">
              <Image src="/hupis.png" alt="HUPIS" fill className="object-contain p-2" />
            </div>
          </Link>

          <Link href="https://www.gamstop.co.uk/" target="_blank" rel="noopener noreferrer">
            <div className="relative w-[120px] h-[56px]  bg-white p-2 rounded-xl transition-opacity">
              <Image src="/gamstop.svg" alt="GamStop" fill className="object-contain p-2" />
            </div>
          </Link>

          <Link
            href="https://www.pbsvi.hr/strucni-programi-i-klub/kocka-terapijsko-rehabilitacijski-program-za-ovisnost-o-kockanju/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative w-[120px] h-[56px]  bg-white p-2 rounded-xl transition-opacity">
              <Image src="/pbsvi.svg" alt="PBSVI" fill className="object-contain " />
            </div>
          </Link>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-secondary-foreground/10 text-center">
          <p className="text-[10px] text-secondary-foreground/50 max-w-2xl mx-auto leading-relaxed mb-3">
            Kockanje može biti ovisnost. Igrajte odgovorno. Samo 18+. Ova stranica sadrži affiliate linkove.
          </p>
          <p className="text-xs text-secondary-foreground/40">© {currentYear} hrvatskeigre.com · Sva prava pridržana</p>
        </div>
      </div>
    </footer>
  )
}
