import Link from "next/link"
import Image from "next/image"
import { Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Casino } from "@/lib/casinos"

interface CasinoCardProps {
  casino: Casino
  rank: number
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i <= Math.round(rating / 2) ? "fill-yellow-400 text-yellow-400" : "text-border"}`}
        />
      ))}
    </div>
  )
}

export function CasinoCard({ casino, rank }: CasinoCardProps) {
  const isTop = rank <= 2

  return (
    <div
      className={`group relative bg-card rounded-xl border transition-all duration-300 hover:shadow-lg ${
        isTop ? "border-primary/30 shadow-md" : "border-border hover:border-primary/20"
      }`}
    >
      {/* Rank badge */}
      {rank <= 3 && (
        <div
          className={`absolute -top-2 -left-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold z-10 ${
            rank === 1
              ? "bg-primary text-primary-foreground"
              : rank === 2
                ? "bg-accent text-accent-foreground"
                : "bg-secondary text-secondary-foreground"
          }`}
        >
          #{rank}
        </div>
      )}

      <div className="p-4 md:p-5">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="w-full md:w-40 h-20 flex-shrink-0 bg-black rounded-lg flex items-center justify-center p-2">
            <Image
              src={casino.logo || "/placeholder.svg"}
              alt={casino.name}
              width={150}
              height={60}
              className="w-auto h-full object-contain"
            />
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <StarRating rating={casino.rating} />
              <span className="text-lg font-semibold text-primary">{casino.rating}</span>
              <span className="text-sm text-muted-foreground">({casino.votes})</span>
            </div>
            <div className="bg-muted/50 rounded-lg px-4 py-3 mb-2 text-center">
              <span className="text-sm text-muted-foreground block mb-0.5">Bonus</span>
              <span className="text-xl font-bold text-foreground line-clamp-2">{casino.bonus}</span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex-shrink-0">
            <Link href={casino.url} target="_blank" rel="noopener noreferrer">
              <Button
                className={`w-full md:w-auto gap-2 ${
                  isTop ? "bg-primary hover:bg-primary/90" : "bg-secondary hover:bg-secondary/90"
                }`}
              >
                Posjeti
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Terms */}
        <p className="text-[10px] text-center text-muted-foreground mt-3 pt-3 border-t border-border">{casino.terms}</p>
      </div>
    </div>
  )
}
