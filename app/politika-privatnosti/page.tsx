import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Politika Privatnosti | HrvatskeIgre.com",
  description: "Kako prikupljamo, koristimo i štitimo vaše osobne podatke na hrvatskeigre.com.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Politika Privatnosti</h1>
            <p className="text-muted-foreground">Kako štitimo vaše podatke</p>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 border border-border">
              <h2 className="text-xl font-bold text-foreground mb-3">Uvod</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                HrvatskeIgre.com poštuje vašu privatnost. Ova politika objašnjava kako prikupljamo i koristimo vaše
                podatke u skladu s GDPR regulativom.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <h2 className="text-xl font-bold text-foreground mb-3">Podaci Koje Prikupljamo</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Anonimizirana IP adresa
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Tip preglednika i uređaja
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Stranice koje posjećujete
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Kolačići (uz vašu suglasnost)
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <h2 className="text-xl font-bold text-foreground mb-3">Vaša Prava</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">U skladu s GDPR-om imate pravo na:</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Pristup vašim podacima</li>
                <li>• Ispravak netočnih podataka</li>
                <li>• Brisanje podataka</li>
                <li>• Prigovor na obradu</li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-primary/30">
              <h2 className="text-xl font-bold text-foreground mb-3">Kontakt</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                Za pitanja o privatnosti kontaktirajte nas:
              </p>
              <p className="text-sm text-primary font-medium">privacy@hrvatskeigre.com</p>
            </div>

            <p className="text-xs text-muted-foreground text-center">Ažurirano: Siječanj 2025</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
