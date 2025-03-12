import { Button } from "@/components/ui/button"
import image1 from "@/images/body.png"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from "@/components/ui/navigation-menu"
import { CalendarDays, Users, ClipboardList, Share2 } from "lucide-react"
import { NavLink } from "react-router-dom"

export default function Home() {
  return (
    <div className="min-h-screen  bg-white">
      {/* Navigation */}


      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
             Find Your Perfect Stay Anywhere and Anytime.
            </h2>
            <p className="text-lg text-black-600">
            Discover your perfect stay with ease! Explore a wide range of hotels, 
            from budget-friendly to luxury, at the best prices. Enjoy exclusive deals, 
            secure booking, and 24/7 customer support. 
            Start planning your next getaway with our easy-to-use search tool and unlock 
            unforgettable travel experiences today! @ HOTELHUB.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="">
              <NavLink
                        className="text-white-600 hover:text-gray-900 font-bold"
                        to="/divisons"
                        >
                            BOOK NOW
                </NavLink>
              </Button>
              <NavLink
              className="text-white-600 hover:text-gray-900 font-bold"
              to="/divisons">          
              <Button variant="outline">See our demo</Button>
              </NavLink>
            </div>
            <p className="text-sm text-gray-500">
              
            </p>
          </div>
          <div className="relative">
            <img
              src="src/images/burj.jpg"
              alt="Welcome Hotel Management System"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 border-t">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center space-y-2">
            <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-[#808C5C]/10">
              <ClipboardList className="w-6 h-6 text-[#808C5C]" />
            </div>
            <h3 className="font-medium">Task management</h3>
          </div>
          <div className="text-center space-y-2">
            <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-[#808C5C]/10">
              <Users className="w-6 h-6 text-[#808C5C]" />
            </div>
            <h3 className="font-medium">Customer relationship</h3>
          </div>
          <div className="text-center space-y-2">
            <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-[#808C5C]/10">
              <CalendarDays className="w-6 h-6 text-[#808C5C]" />
            </div>
            <h3 className="font-medium">Room management</h3>
          </div>
          <div className="text-center space-y-2">
            <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-[#808C5C]/10">
              <Share2 className="w-6 h-6 text-[#808C5C]" />
            </div>
            <h3 className="font-medium">OTA integration</h3>
          </div>
        </div>
        <div>
          <center><img src={image1}></img></center>
        </div>
      </section>
    </div>
  )
}
