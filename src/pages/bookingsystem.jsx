import { useState } from "react";
import axios from "axios";
// import { useRouter } from "next/router";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { DatePickerWithRange } from "@/components/date-range-picker";
import { GuestSelector } from "@/components/guest-selector";

export default function BookingForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        roomType: "",
        dateRange: {},
        guests: {},
        specialRequests: ""
    });
    // const router = useRouter();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/api/room-booking", formData, {
                headers: { Authorization: `Bearer YOUR_AUTH_TOKEN` }
            });
            // router.push("/confirmation");
        } catch (error) {
            console.error("Error submitting booking:", error);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 p-4 md:p-8">
            <div className="mx-auto max-w-4xl">
                {/* Banner Images */}
                <div className="mb-8 flex justify-center gap-4">
                    <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-22%20103027-pW6N4ovhFZbptnBpIuE1CD8yZUAYMD.png" alt="Hotel Room 1" className="h-32 w-32 rounded-lg object-cover" />
                    <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-22%20103027-pW6N4ovhFZbptnBpIuE1CD8yZUAYMD.png" alt="Hotel Room 2" className="h-32 w-32 rounded-lg object-cover" />
                    <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-22%20103027-pW6N4ovhFZbptnBpIuE1CD8yZUAYMD.png" alt="Hotel View" className="h-32 w-32 rounded-lg object-cover" />
                </div>

                <Card className="w-full">
                    <CardHeader className="text-center">
                        <CardTitle className="text-3xl">Hotel Booking</CardTitle>
                        <CardDescription>Experience something new every moment</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            {/* Name Fields */}
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName">First Name</Label>
                                    <Input id="firstName" placeholder="First Name" onChange={handleChange} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName">Last Name</Label>
                                    <Input id="lastName" placeholder="Last Name" onChange={handleChange} />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <Label htmlFor="email">E-mail <span className="text-red-500">*</span></Label>
                                <Input id="email" type="email" placeholder="ex: myname@example.com" onChange={handleChange} />
                            </div>

                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="contact">Contact</Label>
                                    <Input id="contact" placeholder="00000-00000" onChange={handleChange} />
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

                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <DatePickerWithRange onChange={(value) => setFormData({ ...formData, dateRange: value })} />
                                <GuestSelector onChange={(value) => setFormData({ ...formData, guests: value })} />
                            </div>

                            {/* Special Requests */}
                            <div className="space-y-2">
                                <Label htmlFor="special">Special Requests</Label>
                                <Textarea id="special" placeholder="Enter any special requests..." onChange={handleChange} />
                            </div>

                            {/* Submit Button */}
                            <Button type="submit" className="w-full bg-green-500 hover:bg-green-600">Submit</Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
