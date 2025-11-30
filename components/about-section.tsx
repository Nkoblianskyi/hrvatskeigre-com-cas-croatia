export function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-medium tracking-widest text-primary uppercase mb-2">
            Tko smo mi
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">O HrvatskeIgre</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card rounded-xl p-6 border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-2">Neovisne Recenzije</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Svaki kasino na našoj platformi prolazi temeljitu analizu. Testiramo sigurnost, bonuse, igre i korisničku
              podršku kako biste vi mogli igrati bez brige.
            </p>
          </div>

          <div className="bg-card rounded-xl p-6 border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-2">Ažurirane Informacije</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Industrija se brzo mijenja. Naš tim kontinuirano prati nove bonuse, promjene uvjeta i nove operatere kako
              biste uvijek imali najnovije podatke.
            </p>
          </div>

          <div className="bg-card rounded-xl p-6 border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-2">Brze Isplate</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Testiramo i bilježimo vrijeme isplata svakog kasina. Preporučujemo samo one operatere koji dokazano brzo i
              pouzdano isplaćuju dobitke.
            </p>
          </div>

          <div className="bg-card rounded-xl p-6 border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-2">Za Igrače</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Naša platforma je stvorena za igrače. Nudimo edukativne vodiče, savjete za odgovornu igru i transparentne
              informacije bez skrivenih interesa.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
