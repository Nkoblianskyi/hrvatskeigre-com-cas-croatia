import { CasinoCard } from "./casino-card"
import { casinos } from "@/lib/casinos"

export function RankingsSection() {
  return (
    <section id="rankings" className="py-4 md:py-6 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Najbolji  Kasini</h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Pažljivo odabrani i testirani operateri s vrhunskim bonusima
          </p>
        </div>

        {/* Casino Cards */}
        <div className="space-y-4">
          {casinos.map((casino, index) => (
            <CasinoCard key={casino.id} casino={casino} rank={index + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
