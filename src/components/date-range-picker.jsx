import * as React from "react";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePickerWithRange({ value, onChange, className }) {
  // Ensure initial state is set correctly
  const [selectedRange, setSelectedRange] = React.useState(
    value || { startDate: null, endDate: null }
  );

  const handleSelect = (range) => {
    if (range) {
      const updatedRange = {
        startDate: range.from || null,
        endDate: range.to || null,
      };
      setSelectedRange(updatedRange);
      onChange(updatedRange); // Update parent state
    }
  };

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant="outline"
            className={cn(
              "h-12 w-full justify-start text-left font-normal",
              !selectedRange.startDate && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {selectedRange.startDate ? (
              selectedRange.endDate ? (
                <>
                  {format(selectedRange.startDate, "LLL dd, y")} -{" "}
                  {format(selectedRange.endDate, "LLL dd, y")}
                </>
              ) : (
                format(selectedRange.startDate, "LLL dd, y")
              )
            ) : (
              <span>Check-in Date — Check-out Date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="range"
            selected={{
              from: selectedRange.startDate,
              to: selectedRange.endDate,
            }}
            onSelect={handleSelect}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
