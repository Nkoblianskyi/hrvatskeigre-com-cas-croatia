export function GuideSection() {
  return (
    <section id="guide" className="py-12 md:py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-medium tracking-widest text-primary uppercase mb-2">Savjeti</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Kako Odabrati Kasino</h2>
        </div>

        <div className="space-y-4">
          {[
            {
              num: "01",
              title: "Provjerite Licencu",
              desc: "Svaki legitiman kasino mora imati važeću licencu od priznatog regulatornog tijela poput MGA, UKGC ili Curacao. Licenca osigurava da je kasino siguran i pošten.",
            },
            {
              num: "02",
              title: "Analizirajte Bonus Uvjete",
              desc: "Atraktivan bonus ne znači uvijek dobru ponudu. Pažljivo pročitajte wagering zahtjeve, vremenska ograničenja i maksimalne isplate prije prihvaćanja bonusa.",
            },
            {
              num: "03",
              title: "Testirajte Korisničku Podršku",
              desc: "Kvalitetna korisnička podrška dostupna 24/7 znak je pouzdanog kasina. Kontaktirajte ih s testnim pitanjem prije registracije.",
            },
            {
              num: "04",
              title: "Provjerite Metode Isplate",
              desc: "Osigurajte da kasino podržava vaše preferirane metode plaćanja i da ima razumne limite i vrijeme obrade isplata.",
            },
          ].map((item) => (
            <div key={item.num} className="bg-card rounded-xl p-5 border border-border flex gap-4">
              <span className="text-2xl font-bold text-primary/30">{item.num}</span>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
