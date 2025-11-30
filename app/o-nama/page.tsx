import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "O nama | HrvatskeIgre.com",
  description: "Saznajte više o HrvatskeIgre.com - vodećoj platformi za recenzije online kasina u Hrvatskoj.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-medium tracking-widest text-primary uppercase mb-2">
              O Platformi
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">O HrvatskeIgre</h1>
            <p className="text-muted-foreground">Vaš pouzdani vodič kroz svijet online kasina</p>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 border border-border">
              <h2 className="text-xl font-bold text-foreground mb-3">Naša Misija</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                HrvatskeIgre.com je nezavisna hrvatska platforma za recenzije online kasina. Naš cilj je pružiti
                hrvatskim igračima pouzdane, objektivne i ažurirane informacije o najboljim online kasinima dostupnima
                na tržištu.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <h2 className="text-xl font-bold text-foreground mb-3">Kako Ocjenjujemo</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Svaki kasino na našoj platformi prolazi detaljnu analizu koja uključuje:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Provjera licence i regulacije
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Testiranje sigurnosti i enkripcije
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Analiza bonus uvjeta
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Provjera brzine isplata
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Testiranje korisničke podrške
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <h2 className="text-xl font-bold text-foreground mb-3">Kontakt</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                Imate pitanja ili prijedloge? Kontaktirajte nas:
              </p>
              <p className="text-sm text-primary font-medium">info@hrvatskeigre.com</p>
            </div>

            <div className="bg-secondary/10 rounded-xl p-6 border border-secondary/20">
              <p className="text-xs text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Napomena:</strong> HrvatskeIgre.com je informativni portal. Ne
                pružamo usluge kockanja. Kockanje može biti ovisnost. Igrajte odgovorno. 18+
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
