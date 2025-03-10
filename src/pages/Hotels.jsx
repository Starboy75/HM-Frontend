import { MapPin, Star, ChevronRight } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
// import hotel1 from "@/images/hotel1.jpg"
import { useNavigate } from "react-router-dom";
import BookingForm from "./bookingsystem";

export default function HotelListing({ booking, setBooking, dialogOpen, setDialogOpen }) {
  const navigate = useNavigate()
  const hotels = [
    {
      id: 1987654321,
      name: "W Goa Vagator Beach",
      location: "Goa, India",
      rating: 9.3,
      ratingText: "Excellent",
      reviews: 4842,
      discount: 26,
      platform: "Holiday Inn",
      price: 8267,
      dates: "12 Mar - 13 Mar",
      features: ["Pay at the property"],
      image: ""
    },
    {
      id: 1987654322,
      name: "The LaLiT New Delhi",
      location: "Delhi, India",
      rating: 8.6,
      ratingText: "Excellent",
      reviews: 47364,
      discount: 10,
      platform: "Trip.com",
      price: 14218,
      dates: "24 Mar - 25 Mar",
      features: ["Free cancellation"],
      image: ""
    },
    {
      id: 1987654323,
      name: "OYO Jaipur",
      location: "Jaipur, India",
      rating: 8.3,
      ratingText: "Very good",
      reviews: 10472,
      discount: 14,
      platform: "Hotels.com",
      price: 5206,
      dates: "14 Apr - 16 Apr",
      features: ["Free cancellation"],
      image: ""
    },
    {
      id: 1987654324,
      name: "The Park Bangalore",
      location: "Bangalore,India",
      rating: 8.3,
      ratingText: "Very good",
      reviews: 10472,
      discount: 14,
      platform: "Hotels.com",
      price: 5206,
      dates: "14 Apr - 16 Apr",
      features: ["Free cancellation"],
      image: ""
    },
    {
      id: 1987654325,
      name: "The Leela Palace Chennai",
      location: "Chennai, India",
      rating: 8.3,
      ratingText: "Very good",
      reviews: 10472,
      discount: 14,
      platform: "Hotels.com",
      price: 5206,
      dates: "14 Apr - 16 Apr",
      features: ["Free cancellation"],
      image: ""
    },
    {
      id: 1987654326,
      name: "The Oberio Mumbai",
      location: "Mumbai, India",
      rating: 8.3,
      ratingText: "Very good",
      reviews: 10472,
      discount: 14,
      platform: "Hotels.com",
      price: 5206,
      dates: "14 Apr - 16 Apr",
      features: ["Free cancellation"],
      image: ""
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Hot hotel deals right now in India</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((hotel, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative">
              <img
                src={hotel.image || "/placeholder.svg"}
                alt={hotel.name}
                className="w-full h-48 object-cover"
              />
              <Badge className="absolute top-3 left-3 bg-red-600 text-white">
                {hotel.discount}% Less than usual
              </Badge>
            </div>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">{hotel.name}</h2>
              <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                <MapPin className="w-4 h-4" />
                <span>{hotel.location}</span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  <span className="font-medium">{hotel.rating}</span>
                </div>
                <span>- {hotel.ratingText}</span>
                <span className="text-muted-foreground">({hotel.reviews})</span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <div className="text-sm font-medium">{hotel.platform}</div>
                <div className="flex items-center gap-2">
                  {hotel.features.map((feature, i) => (
                    <span key={i} className="text-sm">
                      ✓ {feature}
                    </span>
                  ))}

                </div>
                <div className="flex items-center gap-2">
                  {hotel.features.map((feature, i) => (
                    <span key={i} className="text-sm">
                      ✓ {feature}
                    </span>
                  ))}

                </div>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-sm">About</span>
                <span className="text-2xl font-bold">
                  ₹{hotel.price.toLocaleString()}
                </span>
                <span className="text-sm text-muted-foreground">per night</span>
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {hotel.dates}
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button
                className="w-full"
                size="lg"
                onClick={() => {
                  setBooking(true)
                  navigate(`/state/hotels?hotelId=${hotel.id}`)
                }}
              >
                Book now
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <BookingForm booking={booking} setBooking={setBooking} dialogOpen={dialogOpen} setDialogOpen={setDialogOpen}/>
    </div>
  )
}
