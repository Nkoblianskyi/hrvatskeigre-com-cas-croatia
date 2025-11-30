export interface Casino {
  id: string
  name: string
  url: string
  bonus: string
  logo: string
  rating: number
  votes: number
  terms: string
  isTopChoice?: boolean
}

export const casinos: Casino[] = [
  {
    id: "psk",
    name: "PSK",
    url: "https://www.psk.hr/",
    bonus: "40 Wenshi Lion Ekskluzivno",
    logo: "/psk.webp",
    rating: 9.6,
    votes: 1974,
    terms: "18+ | Igrajte odgovorno | Novi igrači | Wagering 35x | 30 dana",
        isTopChoice: true,
  },
  {
    id: "germania",
    name: "Germania",
    url: "https://www.germaniasport.hr/",
    bonus: "do 1000€ + 350 Besplatnih Vrtnji + 15€ Besplatna Oklada",
    logo: "/germania.svg",
    rating: 9.5,
    votes: 2153,
    terms: "18+ | Uvjeti vrijede | Novi korisnici | Wagering 30x | 21 dan",

  },

  {
    id: "supersport",
    name: "SuperSport",
    url: "https://www.supersport.hr/",
    bonus: "do 300€ + 500 Besplatnih Vrtnji",
    logo: "/supersport.png",
    rating: 9.3,
    votes: 1857,
    terms: "18+ | Uvjeti vrijede | Novi igrači | Wagering 40x | 7 dana",
  },
  {
    id: "favbet",
    name: "Favbet",
    url: "https://www.favbet.hr/",
    bonus: "do 3000€ + 500 Besplatnih Vrtnji",
    logo: "/favbet.svg",
    rating: 9.2,
    votes: 2248,
    terms: "18+ | Odgovorno klađenje | Licencirano | Brze isplate",
  },
]

export const topCasino = casinos[0]
