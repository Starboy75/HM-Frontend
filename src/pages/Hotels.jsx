import { MapPin, Star, ChevronRight } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
// import hotel1 from "@/images/hotel1.jpg"
import { useNavigate } from "react-router-dom";
import BookingForm from "./bookingsystem";
import image1 from "@/images/image1.jpg";
import image2 from "@/images/image2.jpg";
import image3 from "@/images/image3.jpeg";
 import image4 from "@/images/image4.jpg";
 import image5 from "@/images/image5.jpg";
  import image6 from "@/images/image6.jpg";
  import image7 from "@/images/image7.jpg";
 import image8 from "@/images/image8.jpg";
 import image9 from "@/images/image9.jpg";
 import image10 from "@/images/image10.png";
 import image11 from "@/images/image11.jpg";
 import image12 from "@/images/image12.avif";
 import image13 from "@/images/image13.jpg";
 import image14 from "@/images/image14.jpg";
  import image15 from "@/images/image15.jpg";
 import image16 from "@/images/image16.jpg";
 import image17 from "@/images/image17.jpg";
 import image18 from "@/images/image18.jpg";
 import image19 from "@/images/image19.jpg";
 import image20 from "@/images/image20.jpg";
 import image21 from "@/images/image21.avif";
 import image22 from "@/images/image22.jpg";
  import image23 from "@/images/image23.jpg";
 import image24 from "@/images/image24.jpg";
 import image25 from "@/images/image25.jpg";
 import image26 from "@/images/image26.jpg";
 import image27 from "@/images/image27.jpg";
 import image28 from "@/images/image28.jpg";
 import image29 from "@/images/image29.jpg";
 import image30 from "@/images/image30.jpg";
 import image31 from "@/images/image31.avif";
 import image32 from "@/images/image32.jpg";
 import image33 from "@/images/image33.jpg";
  import image34 from "@/images/image34.jpg";
 import image35 from "@/images/image35.avif";
 import image36 from "@/images/image36.jpg";
export default function HotelListing({ booking, setBooking, dialogOpen, setDialogOpen, destination }) {
  const navigate = useNavigate()
  const hotels = [
    {
      id: 1987654321,
      name: "Radissons Blu New Delhi",
      location: "New Delhi, India",
      rating: 9.3,
      ratingText: "Excellent",
      reviews: 4842,
      discount: 26,
      platform: "Holiday Inn",
      price: 8267,
      // dates: "12 Mar - 13 Mar",
      features: ["Pay at the property"],
      image: image1,
      state: "delhi"
    },
    {
      id: 1987654322,
      name: "The LaLiT New Delhi",
      location: "New Delhi, India",
      rating: 8.6,
      ratingText: "Excellent",
      reviews: 47364,
      discount: 10,
      platform: "Trip.com",
      price: 14218,
      // dates: "24 Mar - 25 Mar",
      features: ["Free cancellation"],
      image: image2,
      state: "delhi"
    },
    {
      id: 1987654323,
      name: "OYO New Delhi",
      location: "New Delhi, India",
      rating: 8.3,
      ratingText: "Very good",
      reviews: 10472,
      discount: 14,
      platform: "Hotels.com",
      price: 5206,
      // dates: "14 Apr - 16 Apr",
      features: ["Free cancellation"],
      image: image3,
      state: "delhi"
    },
    {
      id: 1987654324,
      name: "The Park New Delhi",
      location: "New Delhi,India",
      rating: 8.3,
      ratingText: "Very good",
      reviews: 10472,
      discount: 14,
      platform: "Hotels.com",
      price: 5206,
      // dates: "14 Apr - 16 Apr",
      features: ["Free cancellation"],
      image: image4,
      state: "delhi"
    },
    {
      id: 1987654325,
      name: "The Leela Palace New Delhi",
      location: "New Delhi, India",
      rating: 8.3,
      ratingText: "Very good",
      reviews: 10472,
      discount: 14,
      platform: "Hotels.com",
      price: 5206,
      // dates: "14 Apr - 16 Apr",
      features: ["Free cancellation"],
      image: image5,
      state: "delhi"
    },
    {
      id: 1987654326,
      name: "The Oberio New Delhi",
      location: "New Delhi, India",
      rating: 8.3,
      ratingText: "Very good",
      reviews: 10472,
      discount: 14,
      platform: "Hotels.com",
      price: 5206,
      // dates: "14 Apr - 16 Apr",
      features: ["Free cancellation"],
      image: image6,
      state: "delhi"
    },
    {
      id: 1987654327,
      name: "The Oberio Bangalore",
      location: "Bangalore, India",
      rating: 9.3,
      ratingText: "Excellent",
      reviews: 700,
      discount: 30,
      platform: "Holiday Inn",
      price: 10700,
      // dates: "12 Mar - 13 Mar",
      features: ["Pay at the property"],
      image: image7,
      state: "bangalore"
    },
    {
      id: 1987654328,
      name: "The Leela Palace",
      location: "Bangalore, India",
      rating: 8.6,
      ratingText: "Excellent",
      reviews: 47364,
      discount: 10,
      platform: "Trip.com",
      price: 14218,
      // dates: "24 Mar - 25 Mar",
      features: ["Free cancellation"],
      image: image8,
      state: "bangalore"
    },
    {
      id: 1987654329,
      name: "Vivanta",
      location: "Bangalore, India",
      rating: 8.3,
      ratingText: "Very good",
      reviews: 10472,
      discount: 25,
      platform: "Hotels.com",
      price: 10900,
      // dates: "14 Apr - 16 Apr",
      features: ["Free cancellation"],
      image: image9,
      state: "bangalore"
    },
    {
      id: 1987654330,
      name: "ITC Gardenia",
      location: "Bangalore,India",
      rating: 8.3,
      ratingText: "Very good",
      reviews: 10472,
      discount: 14,
      platform: "Hotels.com",
      price: 9900,
      // dates: "14 Apr - 16 Apr",
      features: ["Free cancellation"],
      image: image10,
      state: "bangalore"
    },
    {
      id: 1987654331,
      name: "Ibis",
      location: "Bangalore, India",
      rating: 8.3,
      ratingText: "Very good",
      reviews: 10472,
      discount: 20,
      platform: "Hotels.com",
      price: 8000,
      // dates: "14 Apr - 16 Apr",
      features: ["Free cancellation"],
      image: image11,
      state: "bangalore"
    },
    {
      id: 1987654332,
      name: "Radisson",
      location: "Bangalore, India",
      rating: 8.3,
      ratingText: "Very good",
      reviews: 10472,
      discount: 30,
      platform: "Hotels.com",
      price: 11000,
      // dates: "14 Apr - 16 Apr",
      features: ["Free cancellation"],
      image: image12,
      state: "bangalore"
    },
    {
      id: 1987654333,
      name: "Parkview",
      location: "Mumbai, India",
      rating: 9.3,
      ratingText: "Excellent",
      reviews: 300,
      discount: 26,
      platform: "Holiday Inn",
      price: 4267,
      // dates: "12 Mar - 13 Mar",
      features: ["Pay at the property"],
      image: image13,
      state: "mumbai"
    },
    {
      id: 1987654334,
      name: "Aroma",
      location: "Mumbai, India",
      rating: 8.6,
      ratingText: "Excellent",
      reviews: 364,
      discount: 10,
      platform: "Trip.com",
      price: 5900,
      // dates: "24 Mar - 25 Mar",
      features: ["Free cancellation"],
      image: image14,
      state: "mumbai"
    },
    {
      id: 1987654335,
      name: "Tuakau",
      location: "Mumbai, India",
      rating: 9.3,
      ratingText: "Very good",
      reviews: 1072,
      discount: 22,
      platform: "Hotels.com",
      price: 7900,
      // dates: "14 Apr - 16 Apr",
      features: ["Free cancellation"],
      image: image15,
      state: "mumbai"
    },
    {
      id: 1987654336,
      name: "The Stand Alone Family House",
      location: "Mumbai,India",
      rating: 8.8,
      ratingText: "Very good",
      reviews: 1047,
      discount: 19,
      platform: "Hotels.com",
      price: 11000,
      // dates: "14 Apr - 16 Apr",
      features: ["Free cancellation"],
      image: image16,
      state: "mumbai"
    },
    {
      id: 1987654337,
      name: "Krishna Motel",
      location: "Mumbai, India",
      rating: 5.3,
      ratingText: "Very good",
      reviews: 991,
      discount: 16,
      platform: "Hotels.com",
      price: 8800,
      // dates: "14 Apr - 16 Apr",
      features: ["Free cancellation"],
      image: image17,
      state: "mumbai"
    },
    {
      id: 1987654338,
      name: "Double Tree",
      location: "Mumbai, India",
      rating: 7.3,
      ratingText: "Very good",
      reviews: 472,
      discount: 14,
      platform: "Hotels.com",
      price: 12000,
      // dates: "14 Apr - 16 Apr",
      features: ["Free cancellation"],
      image: image18,
      state: "mumbai"
    },
    {
      id: 1987654339,
      name: "The park Chennai",
      location: "Chennai, India",
      rating: 8.3,
      ratingText: "Excellent",
      reviews: 482,
      discount: 26,
      platform: "Holiday Inn",
      price: 9900,
      // dates: "12 Mar - 13 Mar",
      features: ["Pay at the property"],
      image: image19,
      state: "chennai"
    },
    {
      id: 1987654340,
      name: "The Leela Palace",
      location: "Chennai, India",
      rating: 9.6,
      ratingText: "Excellent",
      reviews: 474,
      discount: 10,
      platform: "Trip.com",
      price: 8900,
      // dates: "24 Mar - 25 Mar",
      features: ["Free cancellation"],
      image: image20,
      state: "chennai"
    },
    {
      id: 1987654341,
      name: "ITC Grand Chola",
      location: "Chennai, India",
      rating: 9.0,
      ratingText: "Very good",
      reviews: 1472,
      discount: 14,
      platform: "Hotels.com",
      price: 9500,
      // dates: "14 Apr - 16 Apr",
      features: ["Free cancellation"],
      image: image21,
      state: "chennai"
    },
    {
      id: 1987654342,
      name: "Taj Coromandel",
      location: "Chennai,India",
      rating: 8.3,
      ratingText: "Very good",
      reviews: 142,
      discount: 14,
      platform: "Hotels.com",
      price: 8300,
      // dates: "14 Apr - 16 Apr",
      features: ["Free cancellation"],
      image: image22,
      state: "chennai"
    },
    {
      id: 1987654343,
      name: "Hyat Regency",
      location: "Chennai, India",
      rating: 8.1,
      ratingText: "Very good",
      reviews: 192,
      discount: 20,
      platform: "Hotels.com",
      price: 11000,
      // dates: "14 Apr - 16 Apr",
      features: ["Free cancellation"],
      image: image23,
      state: "chennai"
    },
    {
      id: 1987654344,
      name: "The Accord Metropolitan",
      location: "Chennai, India",
      rating: 8.3,
      ratingText: "Very good",
      reviews: 667,
      discount: 25,
      platform: "Hotels.com",
      price: 10000,
      // dates: "14 Apr - 16 Apr",
      features: ["Free cancellation"],
      image: image24,
      state: "chennai"
    },
    {
      id: 1987654345,
      name: "Trident Hyderabad",
      location: "Hyderabad, India",
      rating: 9.7,
      ratingText: "Excellent",
      reviews: 482,
      discount: 26,
      platform: "Holiday Inn",
      price: 9000,
      // dates: "12 Mar - 13 Mar",
      features: ["Pay at the property"],
      image: image26,
      state: "hyderabad"
    },
    {
      id: 1987654346,
      name: "The Park Hyderabad",
      location: "Hyderabad, India",
      rating: 8.6,
      ratingText: "Excellent",
      reviews: 364,
      discount: 10,
      platform: "Trip.com",
      price: 11200,
      // dates: "24 Mar - 25 Mar",
      features: ["Free cancellation"],
      image: image27,
      state: "hyderabad"
    },
    {
      id: 1987654347,
      name: "Marigold",
      location: "Hyderabad, India",
      rating: 8.8,
      ratingText: "Very good",
      reviews: 1042,
      discount: 15,
      platform: "Hotels.com",
      price: 7800,
      // dates: "14 Apr - 16 Apr",
      features: ["Free cancellation"],
      image: image28,
      state: "hyderabad"
    },
    {
      id: 1987654348,
      name: "Vivanta Hyderabad",
      location: "Hyderabad,India",
      rating: 8.5,
      ratingText: "Very good",
      reviews: 762,
      discount: 10,
      platform: "Hotels.com",
      price: 8700,
      // dates: "14 Apr - 16 Apr",
      features: ["Free cancellation"],
      image: image25,
      state: "hyderabad"
    },
    {
      id: 1987654349,
      name: "Novotel Hyderabad",
      location: "Hyderabad, India",
      rating: 8.3,
      ratingText: "Very good",
      reviews: 102,
      discount: 20,
      platform: "Hotels.com",
      price: 7800,
      // dates: "14 Apr - 16 Apr",
      features: ["Free cancellation"],
      image: image29,
      state: "hyderabad"
    },
    {
      id: 1987654350,
      name: "Radisson Blue plaza Hyderabad",
      location: "Hyderabad, India",
      rating: 8.3,
      ratingText: "Very good",
      reviews: 456,
      discount: 5,
      platform: "Hotels.com",
      price: 10000,
      // dates: "14 Apr - 16 Apr",
      features: ["Free cancellation"],
      image: image30,
      state: "hyderabad"
    },
    {
      id: 1987654351,
      name: "Ibis Jaipur",
      location: "Jaipur, India",
      rating: 9.3,
      ratingText: "Excellent",
      reviews: 842,
      discount: 25,
      platform: "Holiday Inn",
      price: 11000,
      // dates: "12 Mar - 13 Mar",
      features: ["Pay at the property"],
      image: image31,
      state: "jaipur"
    },
    {
      id: 1987654352,
      name: "Holiday Inn Jaipur",
      location: "Jaipur, India",
      rating: 9.2,
      ratingText: "Excellent",
      reviews: 764,
      discount: 10,
      platform: "Trip.com",
      price: 10200,
      // dates: "24 Mar - 25 Mar",
      features: ["Free cancellation"],
      image: image32,
      state: "jaipur"
    },
    {
      id: 1987654353,
      name: "OYO Jaipur",
      location: "Jaipur, India",
      rating: 8.3,
      ratingText: "Very good",
      reviews: 10472,
      discount: 14,
      platform: "Hotels.com",
      price: 5206,
      // dates: "14 Apr - 16 Apr",
      features: ["Free cancellation"],
      image: image33,
      state: "jaipur"
    },
    {
      id: 1987654354,
      name: "Jaipur Marriot",
      location: "Jaipur,India",
      rating: 8.3,
      ratingText: "Very good",
      reviews: 372,
      discount: 20,
      platform: "Hotels.com",
      price: 11100,
      // dates: "14 Apr - 16 Apr",
      features: ["Free cancellation"],
      image: image34,
      state: "jaipur"
    },
    {
      id: 1987654355,
      name: "Hotel Pear Palace",
      location: "Jaipur, India",
      rating: 7.9,
      ratingText: "Very good",
      reviews: 872,
      discount: 10,
      platform: "Hotels.com",
      price: 8900,
      // dates: "14 Apr - 16 Apr",
      features: ["Free cancellation"],
      image: image35,
      state: "jaipur"
    },
    {
      id: 1987654356,
      name: "The Lalit Jaipur",
      location: "Jaipur, India",
      rating: 8.4,
      ratingText: "Very good",
      reviews: 765,
      discount: 25,
      platform: "Hotels.com",
      price: 9300,
      // dates: "14 Apr - 16 Apr",
      features: ["Free cancellation"],
      image: image36,
      state: "jaipur"
    },






  ]


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Hot hotel deals right now in India</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((hotel, index) => (
          console.log(hotel.state),
          console.log(destination),
          hotel.state === destination && (
            <Card key={index} className="overflow-hidden">
              <div className="relative">
                <img
                  src={hotel.image}
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
                  {/* {hotel.dates} */}
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
          )
        ))}
      </div>
      <BookingForm booking={booking} setBooking={setBooking} dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} />
    </div>
  )
}
