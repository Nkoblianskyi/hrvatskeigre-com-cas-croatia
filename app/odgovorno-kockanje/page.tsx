import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Odgovorno Kockanje | HrvatskeIgre.com",
  description: "Savjeti za odgovorno kockanje i resursi za pomoć. Igrajte sigurno i odgovorno.",
}

export default function ResponsibleGamblingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-destructive/10 mb-4">
              <span className="text-lg font-bold text-destructive">18+</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Odgovorno Kockanje</h1>
            <p className="text-muted-foreground">Kockanje treba biti zabava, ne problem</p>
          </div>

          <div className="space-y-6">
            <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6">
              <h2 className="text-xl font-bold text-foreground mb-3">Upozorenje</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Kockanje može uzrokovati ovisnost i ozbiljne financijske probleme. Nikada ne kockajte novac koji ne
                možete priuštiti izgubiti. Ako osjećate da kockanje izmiče kontroli, odmah potražite pomoć.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <h2 className="text-xl font-bold text-foreground mb-4">Znakovi Problema</h2>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2" />
                  <span>Kockanje više novca ili češće nego što ste planirali</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2" />
                  <span>Pokušaji vraćanja izgubljenog novca</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2" />
                  <span>Laganje o kockanju obitelji i prijateljima</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2" />
                  <span>Posudba novca ili prodaja imovine za kockanje</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2" />
                  <span>Zanemarivanje posla, obitelji ili drugih obaveza</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <h2 className="text-xl font-bold text-foreground mb-4">Savjeti za Sigurnu Igru</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-muted/50 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground text-sm mb-1">Postavite Budžet</h3>
                  <p className="text-xs text-muted-foreground">Odlučite unaprijed koliko možete potrošiti.</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground text-sm mb-1">Koristite Limite</h3>
                  <p className="text-xs text-muted-foreground">Aktivirajte limite depozita i gubitaka u kasinu.</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground text-sm mb-1">Ne Vraćajte Gubitke</h3>
                  <p className="text-xs text-muted-foreground">Prihvatite gubitak i prestanite igrati.</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground text-sm mb-1">Igrajte Trijezni</h3>
                  <p className="text-xs text-muted-foreground">Ne kockajte pod utjecajem alkohola.</p>
                </div>
              </div>
            </div>

            <div className="bg-secondary text-secondary-foreground rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4">Gdje Potražiti Pomoć</h2>
              <div className="space-y-4">
                <div className="bg-secondary-foreground/10 rounded-lg p-4">
                  <h3 className="font-semibold text-sm mb-1">HUPIS</h3>
                  <p className="text-xs text-secondary-foreground/70 mb-2">
                    Hrvatski centar za pomoć osobama s problemom kockanja
                  </p>
                  <a
                    href="https://www.hupis.hr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary hover:underline"
                  >
                    www.hupis.hr
                  </a>
                </div>
                <div className="bg-secondary-foreground/10 rounded-lg p-4">
                  <h3 className="font-semibold text-sm mb-1">Anonimni Kockari</h3>
                  <p className="text-xs text-secondary-foreground/70 mb-2">Međunarodna organizacija za podršku</p>
                  <a
                    href="https://www.gamblersanonymous.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary hover:underline"
                  >
                    www.gamblersanonymous.org
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
