export function SportInfoSection() {
  return (
    <section id="game-types" className="py-12 md:py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-medium tracking-widest text-primary uppercase mb-2">
            Vrste Igara
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Popularne Kategorije</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-card rounded-xl p-5 border border-border text-center hover:border-primary/30 transition-colors">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-foreground mb-1">Slot Igre</h3>
            <p className="text-xs text-muted-foreground">
              Video slotovi, klasični slotovi i jackpot igre s visokim RTP postocima.
            </p>
          </div>

          <div className="bg-card rounded-xl p-5 border border-border text-center hover:border-primary/30 transition-colors">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-foreground mb-1">Stolne Igre</h3>
            <p className="text-xs text-muted-foreground">Blackjack, rulet, baccarat i poker s niskim house edge-om.</p>
          </div>

          <div className="bg-card rounded-xl p-5 border border-border text-center hover:border-primary/30 transition-colors">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-foreground mb-1">Live Kasino</h3>
            <p className="text-xs text-muted-foreground">Pravo kasino iskustvo s profesionalnim krupijerima uživo.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
