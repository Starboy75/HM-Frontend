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

export default function BookingForm({ booking, setBooking, dialogOpen, setDialogOpen }) {
    const navigate = useNavigate();
    const location = useLocation();

    // Extract hotelId from query string
    const getHotelIdFromQuery = () => {
        const params = new URLSearchParams(location.search);
        return params.get("hotelId");
    };

    const [hotelId, setHotelId] = useState(getHotelIdFromQuery() || "");

    useEffect(() => {
        setHotelId(getHotelIdFromQuery());
    }, [location]);

    console.log("Extracted hotelId:", hotelId); // Debugging: Check hotelId value

    const [formData, setFormData] = useState({
        hotelId: hotelId || "",  
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        roomType: "",
        dateRange: { startDate: null, endDate: null },
        guests: { adults: 1, children: 0, rooms: 1 },
        specialRequests: "",
    });

    // Ensure formData.hotelId updates when hotelId changes
    useEffect(() => {
        setFormData((prev) => ({ ...prev, hotelId }));
    }, [hotelId]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.contact || !formData.roomType) {
            toast.error("Please fill in all required fields.");
            return;
        }
        if (!formData.dateRange.startDate || !formData.dateRange.endDate) {
            toast.error("Please select a valid date range.");
            return;
        }

        try {
            await axios.post("/api/room-booking", formData);
            setBooking(false);
            setFormData({
                hotelId: "",
                firstName: "",
                lastName: "",
                email: "",
                contact: "",
                roomType: "",
                dateRange: { startDate: null, endDate: null },
                guests: { adults: 1, children: 0, rooms: 1 },
                specialRequests: "",
            });
            toast.success("Booking successful", {
                description: "Your room has been booked successfully. We look forward to hosting you.",
            });
            navigate(`/state/hotels`);
        } catch (error) {
            if (error.response?.status === 401) {
                toast.error("Booking failed", {
                    description: error.response?.data?.message || "An unexpected error occurred.",
                });
                setDialogOpen(true);
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
                            <Input id="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input id="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <Label htmlFor="email">E-mail <span className="text-red-500">*</span></Label>
                        <Input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="myname@example.com" required />
                    </div>

                    {/* Contact & Room Type */}
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="contact">Contact</Label>
                            <Input id="contact" type="tel" value={formData.contact} onChange={handleChange} placeholder="1234567890" pattern="\d{10}" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="roomType">Room Type</Label>
                            <Select value={formData.roomType} onValueChange={(value) => setFormData({ ...formData, roomType: value })} required>
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
                        <DatePickerWithRange onChange={(value) => {console.log(value);setFormData({ ...formData, dateRange: value })}} />
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
