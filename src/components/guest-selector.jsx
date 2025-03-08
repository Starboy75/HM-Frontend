
import * as React from "react"
import { Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"

export function GuestSelector() {
  const [adults, setAdults] = React.useState("2")
  const [children, setChildren] = React.useState("0")
  const [rooms, setRooms] = React.useState("1")

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="h-12 w-full justify-start font-normal"
        >
          <Users className="mr-2 h-4 w-4" />
          {adults} adults · {children} children · {rooms} room
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <label htmlFor="adults">Adults</label>
            <Select value={adults} onValueChange={setAdults}>
              <SelectTrigger className="w-20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {[...Array(10)].map((_, i) => (
                  <SelectItem key={i + 1} value={(i + 1).toString()}>
                    {i + 1}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center justify-between">
            <label htmlFor="children">Children</label>
            <Select value={children} onValueChange={setChildren}>
              <SelectTrigger className="w-20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {[...Array(11)].map((_, i) => (
                  <SelectItem key={i} value={i.toString()}>
                    {i}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center justify-between">
            <label htmlFor="rooms">Rooms</label>
            <Select value={rooms} onValueChange={setRooms}>
              <SelectTrigger className="w-20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {[...Array(10)].map((_, i) => (
                  <SelectItem key={i + 1} value={(i + 1).toString()}>
                    {i + 1}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
