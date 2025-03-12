import { useState } from "react"
import { Search, Settings, MoreHorizontal, Plus, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function BookingList() {
  const [bookings, setBookings] = useState([
    {
      id: "AB-357",
      customer: {
        name: "Abu Bin Ishtiyak",
        email: "info@softnio.com",
        avatar: "/placeholder-user.jpg",
        initials: "AB",
      },
      package: "Continental",
      status: "Active",
      roomType: "Super Delux",
      arriveDate: "10 Feb 2020",
      payment: "Paid",
    },
    {
      id: "AB-753",
      customer: {
        name: "Ashley Lawson",
        email: "ashley@softnio.com",
        avatar: "/placeholder-user.jpg",
        initials: "AL",
      },
      package: "Strater",
      status: "Pending",
      roomType: "Single",
      arriveDate: "07 Feb 2021",
      payment: "Due",
    },
    {
      id: "AB-159",
      customer: {
        name: "Micheal Murphy",
        email: "info@niosoft.com",
        avatar: "/placeholder-user.jpg",
        initials: "MM",
      },
      package: "All Suit",
      status: "Active",
      roomType: "Super Delux",
      arriveDate: "10 Jan 2021",
      payment: "Paid",
    },
    {
      id: "AB-951",
      customer: {
        name: "Eliana Stout",
        email: "Eliana@softnio.com",
        avatar: "/placeholder-user.jpg",
        initials: "ES",
      },
      package: "Vacation",
      status: "Active",
      roomType: "Double",
      arriveDate: "07 Feb 2021",
      payment: "Paid",
    },
    {
      id: "AB-903",
      customer: {
        name: "Luukas Haapala",
        email: "Luukas@niosoft.com",
        avatar: "/placeholder-user.jpg",
        initials: "LH",
      },
      package: "Honeymoon",
      status: "Active",
      roomType: "Double",
      arriveDate: "02 May 2021",
      payment: "Paid",
    },
    {
      id: "AB-256",
      customer: {
        name: "Azul Baldwin",
        email: "Azul@softnio.com",
        avatar: "/placeholder-user.jpg",
        initials: "AB",
      },
      package: "Vacation",
      status: "Pending",
      roomType: "Double",
      arriveDate: "07 Jan 2021",
      payment: "Due",
    },
  ])

  return (
    <div className="w-full max-w-7xl mx-auto p-4 bg-white rounded-lg shadow-sm">
      <div className="flex flex-col space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-semibold text-slate-800">Booking Lists</h1>
            <p className="text-sm text-slate-500">You have total 2,595 booking's.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Export
            </Button>
            <Button size="icon" className="bg-indigo-500 hover:bg-indigo-600">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="border rounded-md">
          <div className="p-4 flex flex-col sm:flex-row justify-between gap-4 border-b">
            <div className="flex gap-2">
              <Select defaultValue="">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Bulk Action" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="delete">Delete Selected</SelectItem>
                  <SelectItem value="approve">Approve Selected</SelectItem>
                  <SelectItem value="reject">Reject Selected</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">Apply</Button>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
                <Input type="search" placeholder="Search..." className="w-full sm:w-[250px] pl-8" />
              </div>
              <Button variant="ghost" size="icon" className="text-slate-500">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">
                    <Checkbox />
                  </TableHead>
                  <TableHead>ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Package</TableHead>
                  <TableHead>Booking</TableHead>
                  <TableHead>Room Type</TableHead>
                  <TableHead>Arrive</TableHead>
                  <TableHead>Payment</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bookings.map((booking) => (
                  <TableRow key={booking.id}>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell className="font-medium text-indigo-500">{booking.id}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={booking.customer.avatar} alt={booking.customer.name} />
                          <AvatarFallback className={getAvatarColor(booking.customer.initials)}>
                            {booking.customer.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{booking.customer.name}</div>
                          <div className="text-sm text-slate-500">{booking.customer.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{booking.package}</TableCell>
                    <TableCell>
                      <Badge
                        variant={booking.status === "Active" ? "outline" : "secondary"}
                        className={`
                          ${
                            booking.status === "Active"
                              ? "text-green-500 bg-green-50 hover:bg-green-50 border-green-200"
                              : "text-yellow-500 bg-yellow-50 hover:bg-yellow-50 border-yellow-200"
                          }
                        `}
                      >
                        {booking.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{booking.roomType}</TableCell>
                    <TableCell>{booking.arriveDate}</TableCell>
                    <TableCell>
                      <span className={booking.payment === "Paid" ? "text-green-500" : "text-yellow-500"}>
                        {booking.payment}
                      </span>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Edit Booking</DropdownMenuItem>
                          <DropdownMenuItem>Delete Booking</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}

function getAvatarColor(initials) {
  const colors = {
    AB: "bg-indigo-500 text-white",
    AL: "bg-gray-200 text-gray-700",
    MM: "bg-gray-800 text-white",
    ES: "bg-gray-200 text-gray-700",
    LH: "bg-yellow-500 text-white",
  }

  return colors[initials] || "bg-gray-200 text-gray-700"
}

