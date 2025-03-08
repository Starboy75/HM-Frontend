import { Card, CardContent } from "@/components/ui/card"

const destinations = [
  {
    city: "New Delhi",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-20%20221237-Emx1sqrVG9jNK8RcQKrI2jIzC7BiML.png",
    alt: "Humayun's Tomb in New Delhi"
  },
  {
    city: "Bangalore",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-20%20221237-Emx1sqrVG9jNK8RcQKrI2jIzC7BiML.png",
    alt: "Vidhana Soudha building in Bangalore"
  },
  {
    city: "Mumbai",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-20%20221237-Emx1sqrVG9jNK8RcQKrI2jIzC7BiML.png",
    alt: "Mumbai skyline with waterfront"
  },
  {
    city: "Chennai",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-20%20221237-Emx1sqrVG9jNK8RcQKrI2jIzC7BiML.png",
    alt: "Marina memorial in Chennai"
  },
  {
    city: "Hyderabad",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-20%20221237-Emx1sqrVG9jNK8RcQKrI2jIzC7BiML.png",
    alt: "Charminar in Hyderabad"
  }
]

export default function States() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Trending destinations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {destinations.map((destination, index) => (
          <Card
            key={destination.city}
            className={`overflow-hidden cursor-pointer transition-transform hover:scale-[1.02] ${
              index < 2 ? "md:col-span-1 lg:col-span-1" : ""
            }`}
          >
            <CardContent className="p-0 relative">
              <div className="relative aspect-[4/3]">
                <img
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h2 className="text-2xl font-bold">
                    {destination.city} <span className="ml-1">🇮🇳</span>
                  </h2>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  )
}
