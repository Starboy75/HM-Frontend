import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { DatePickerWithRange } from "@/components/date-range-picker";
import { GuestSelector } from "@/components/guest-selector";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogHeader,
    DialogDescription
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { set } from "date-fns";

export default function BookingForm({ booking, setBooking, dialogOpen, setDialogOpen }) {
    const navigate = useNavigate();
    const location = useLocation();

    // Extract hotelId from query string
    const getHotelIdFromQuery = () => {
        const params = new URLSearchParams(location.search);
        return params.get("hotelId");  // hotelId must be named in URL like "?hotelId=1987654321"
    };

    const [hotelId, setHotelId] = useState("");

    useEffect(() => {
        setHotelId(getHotelIdFromQuery());
    }, [location]);

    console.log("Extracted hotelId:", hotelId); // ✅ Debugging: Check hotelId value

    const [formData, setFormData] = useState({
        hotelId: hotelId || "",  // ✅ Include hotelId in formData
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        roomType: "",
        dateRange: {},
        guests: {},
        specialRequests: ""
    });

    useEffect(() => {
        setFormData((prev) => ({ ...prev, hotelId }));
    }, [hotelId]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/api/room-booking", formData);
            toast.success("Booking successful", {
                description: "Your room has been booked successfully. We look forward to hosting you.",
            });
            navigate(`/state/hotels`);
        } catch (error) {
            if (error.response.status === 400) {
                toast.error(
                    "Booking failed", {
                    description: error.response.data.message,

                })
            }
            if (error.response.status === 401) {
                toast.error(
                    "Booking failed", {
                    description: error.response.data.message,

                })
                setDialogOpen(true)
            } else {
                toast.error(
                    "Booking failed", {
                    description: error.response.data.message,

                })
            }
        }
    };

    return (
        <Dialog
            open={booking}
            onOpenChange={() => {
                setBooking(false);
                navigate(`/state/hotels`);
            }}
        >
            <DialogContent className="mx-auto max-w-4xl max-h-screen overflow-y-auto">
                <DialogHeader className="text-center">
                    <DialogTitle className="text-3xl">Room Booking</DialogTitle>
                    <DialogDescription>Experience something new every moment</DialogDescription>
                </DialogHeader>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input id="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input id="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <Label htmlFor="email">E-mail <span className="text-red-500">*</span></Label>
                        <Input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="ex: myname@example.com" />
                    </div>

                    {/* Contact & Room Type */}
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="contact">Contact</Label>
                            <Input id="contact" value={formData.contact} onChange={handleChange} placeholder="00000-00000" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="roomType">Room Type</Label>
                            <Select onValueChange={(value) => setFormData({ ...formData, roomType: value })}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Please Select" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="standard">Standard Room</SelectItem>
                                    <SelectItem value="deluxe">Deluxe Room</SelectItem>
                                    <SelectItem value="suite">Suite</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* Date Range & Guests */}
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <DatePickerWithRange onChange={(value) => setFormData({ ...formData, dateRange: value })} />
                        <GuestSelector onChange={(value) => setFormData({ ...formData, guests: value })} />
                    </div>

                    {/* Special Requests */}
                    <div className="space-y-2">
                        <Label htmlFor="special">Special Requests</Label>
                        <Textarea id="special" value={formData.specialRequests} onChange={handleChange} placeholder="Enter any special requests..." />
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" className="w-full">Submit</Button>
                </form>
            </DialogContent>
            <Toaster />
        </Dialog>
    );
}
