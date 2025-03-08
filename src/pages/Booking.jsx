import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import {Bed,Plane,Car,MapPin,HelpCircle,PlaneTakeoff,CarTaxiFrontIcon as Taxi} from "lucide-react"
import { DatePickerWithRange } from "@/components/date-range-picker"
import { GuestSelector } from "@/components/guest-selector"

export default function book() {
  return (
    <div className="min-h-screen bg-violet-500">
      {/* Top Navigation */}
      <header className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <a href="#" className="text-white text-2xl font-bold">
            Booking.com
          </a>

          <div className="flex items-center gap-4">
            <span className="text-white">INR</span>
            <img
              src="https://v0.dev/placeholder.svg?height=20&width=30"
              alt="India flag"
              className="h-5 w-7"
            />
            <Button variant="ghost" size="icon" className="text-white">
              <HelpCircle className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white/10"
            >
              List your property
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white/10"
            >
              Register
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white/10"
            >
              Sign in
            </Button>
          </div>
        </nav>

        {/* Secondary Navigation */}
        <div className="flex gap-6 mt-6">
          <Button
            variant="ghost"
            className="text-white flex gap-2 items-center"
          >
            <Bed className="h-5 w-5" />
            Stays
          </Button>
          <Button
            variant="ghost"
            className="text-white flex gap-2 items-center"
          >
            <Plane className="h-5 w-5" />
            Flights
          </Button>
          <Button
            variant="ghost"
            className="text-white flex gap-2 items-center"
          >
            <PlaneTakeoff className="h-5 w-5" />
            Flight + Hotel
          </Button>
          <Button
            variant="ghost"
            className="text-white flex gap-2 items-center"
          >
            <Car className="h-5 w-5" />
            Car rentals
          </Button>
          <Button
            variant="ghost"
            className="text-white flex gap-2 items-center"
          >
            <MapPin className="h-5 w-5" />
            Attractions
          </Button>
          <Button
            variant="ghost"
            className="text-white flex gap-2 items-center"
          >
            <Taxi className="h-5 w-5" />
            Airport taxis
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 mt-16">
        <h1 className="text-white text-5xl font-bold mb-4">
          Find your next stay
        </h1>
        <p className="text-white text-xl mb-8">
          Search deals on hotels, homes, and much more...
        </p>

        {/* Search Form */}
        <div className="bg-white p-2 rounded-lg flex flex-wrap gap-2">
          <div className="flex-1 min-w-[250px]">
            <Input placeholder="Where are you going?" className="h-12" />
          </div>
          <div className="min-w-[250px]">
            <DatePickerWithRange />
          </div>
          <div className="min-w-[250px]">
            <GuestSelector />
          </div>
          <Button className="h-12 px-8 bg-blue-600 hover:bg-blue-700 text-lg">
            Search
          </Button>
        </div>

        {/* Flights Checkbox */}
        <div className="mt-4 flex items-center gap-2">
          <Checkbox
            id="flights"
            className="border-white data-[state=checked]:bg-white data-[state=checked]:text-blue-600"
          />
          <label htmlFor="flights" className="text-white">
            I&apos;m looking for flights
          </label>
        </div>

        {/* Offers Section */}
        <section className="mt-16">
          <h2 className="text-white text-2xl font-semibold mb-4">Offers</h2>
          <p className="text-white/90">
            Promotions, deals, and special offers for you
          </p>
        </section>
      </main>
    </div>
  )
}
