import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Politika Kolačića | HrvatskeIgre.com",
  description: "Kako koristimo kolačiće na hrvatskeigre.com platformi.",
}

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Politika Kolačića</h1>
            <p className="text-muted-foreground">Kako koristimo kolačiće</p>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 border border-border">
              <h2 className="text-xl font-bold text-foreground mb-3">Što su Kolačići?</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Kolačići su male tekstualne datoteke koje se pohranjuju na vašem uređaju kada posjetite našu stranicu.
                Pomažu nam poboljšati vaše iskustvo i analizirati korištenje stranice.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <h2 className="text-xl font-bold text-foreground mb-4">Vrste Kolačića</h2>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <h3 className="font-semibold text-foreground text-sm mb-1">Nužni Kolačići</h3>
                  <p className="text-xs text-muted-foreground">Potrebni za osnovno funkcioniranje stranice.</p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <h3 className="font-semibold text-foreground text-sm mb-1">Analitički Kolačići</h3>
                  <p className="text-xs text-muted-foreground">Pomažu nam razumjeti kako koristite stranicu.</p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <h3 className="font-semibold text-foreground text-sm mb-1">Marketinški Kolačići</h3>
                  <p className="text-xs text-muted-foreground">Koriste se za prikazivanje relevantnog sadržaja.</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <h2 className="text-xl font-bold text-foreground mb-3">Upravljanje Kolačićima</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Možete upravljati kolačićima kroz postavke preglednika ili naš banner za kolačiće. Onemogućavanje
                kolačića može utjecati na funkcionalnost stranice.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-primary/30">
              <h2 className="text-xl font-bold text-foreground mb-3">Kontakt</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">Za pitanja o kolačićima:</p>
              <p className="text-sm text-primary font-medium">info@hrvatskeigre.com</p>
            </div>

            <p className="text-xs text-muted-foreground text-center">Ažurirano: Siječanj 2025</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
