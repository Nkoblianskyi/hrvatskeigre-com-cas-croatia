export function ResponsibleGamingSection() {
  return (
    <section id="responsible-gaming" className="py-12 md:py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-secondary rounded-2xl p-6 md:p-10 text-secondary-foreground">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
              <span className="text-lg font-bold text-destructive">18+</span>
            </div>

            <div className="flex-1">
              <h2 className="text-xl md:text-2xl font-bold mb-3">Odgovorno Kockanje</h2>
              <p className="text-sm text-secondary-foreground/80 leading-relaxed mb-4">
                Kockanje treba biti zabava, ne izvor prihoda ili bijeg od problema. Postavite budžet prije igre i
                pridržavajte ga se. Ako osjećate da gubite kontrolu, potražite pomoć.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                <div className="bg-secondary-foreground/10 rounded-lg p-3 text-center">
                  <span className="block text-xs text-secondary-foreground/60 mb-1">Postavite</span>
                  <span className="text-sm font-medium">Budžet</span>
                </div>
                <div className="bg-secondary-foreground/10 rounded-lg p-3 text-center">
                  <span className="block text-xs text-secondary-foreground/60 mb-1">Koristite</span>
                  <span className="text-sm font-medium">Limite</span>
                </div>
                <div className="bg-secondary-foreground/10 rounded-lg p-3 text-center">
                  <span className="block text-xs text-secondary-foreground/60 mb-1">Ne vraćajte</span>
                  <span className="text-sm font-medium">Gubitke</span>
                </div>
                <div className="bg-secondary-foreground/10 rounded-lg p-3 text-center">
                  <span className="block text-xs text-secondary-foreground/60 mb-1">Potražite</span>
                  <span className="text-sm font-medium">Pomoć</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.hupis.hr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:text-accent transition-colors underline"
                >
                  HUPIS - Pomoć
                </a>
                <a
                  href="https://www.gamblersanonymous.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:text-accent transition-colors underline"
                >
                  Anonimni Kockari
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
