"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) setShowBanner(true)
  }, [])

  const handleConsent = (accepted: boolean) => {
    localStorage.setItem("cookie-consent", accepted ? "accepted" : "declined")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom">
      <div className="container mx-auto max-w-2xl">
        <div className="bg-card border border-border rounded-xl shadow-lg p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-sm text-foreground font-medium mb-1">Kolačići</p>
            <p className="text-xs text-muted-foreground">
              Koristimo kolačiće za poboljšanje iskustva. Nastavkom korištenja pristajete na upotrebu.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Button variant="outline" size="sm" onClick={() => handleConsent(false)} className="text-xs">
              Odbij
            </Button>
            <Button size="sm" onClick={() => handleConsent(true)} className="text-xs bg-primary hover:bg-primary/90">
              Prihvati
            </Button>
            <button onClick={() => handleConsent(false)} className="p-1 hover:bg-muted rounded">
              <X className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
