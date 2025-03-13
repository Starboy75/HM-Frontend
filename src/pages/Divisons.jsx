import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom"; // Import useNavigate


export default function States({setDestination}){
  const navigate = useNavigate(); // Initialize useNavigate

  const destinations = [
    {
      city: "New Delhi",
      image:
        "src/images/newdelhi.webp",
      alt: "Humayun's Tomb in New Delhi",
      state: "delhi",
    },
    {
      city: "Bangalore",
      image:
        "src/images/bangalore.jpg",
      alt: "Vidhana Soudha building in Bangalore",
      state:"bangalore"
    },
    {
      city: "Mumbai",
      image:
        "src/images/mumbai.jpg",
      alt: "Mumbai skyline with waterfront",
      state:"mumbai"
    },
    {
      city: "Chennai",
      image:
        "src/images/chennai.jpeg",
      alt: "Marina memorial in Chennai",
      state:"chennai"
    },
    {
      city: "Hyderabad",
      image:
        "src/images/hyderabad.webp",
      alt: "Charminar in Hyderabad",
      state:"hyderabad"
    },
    {
      city: "Jaipur",
      image:
        "src/images/jaipur.webp",
      alt: "Charminar in Hyderabad",
      state:"jaipur"
    },
  ];

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
            onClick={() => {
              setDestination(destination.state)
              navigate("/state/hotels")
            }} // Navigate to /states/hotels
          >
            <CardContent className="p-0 relative">
              <div className="relative aspect-[4/3]">
                <img
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.alt}
                  className="object-cover w-full h-full"
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
  );
}
