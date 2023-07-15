"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/Button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

const Calendar = ({ className, classNames, showOutsideDays = true, ...rest }: CalendarProps) => {
  return (
    <DayPicker
      {...rest}
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ type: "secondary", size: "sm" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-light-text rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "text-center text-sm p-0 relative first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100 border border-transparent inline-flex justify-center items-center rounded-md focus-visible:outline-none focus-visible:border-border/60 hover:bg-accent/50 aria-selected:border-border"
        ),
        day_selected: cn("bg-accent/50"),
        day_today: "bg-primary text-black font-semibold",
        day_outside: "text-light-text opacity-50",
        day_disabled: "text-light-text opacity-50",
        day_range_middle: "aria-selected:bg-accent",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...rest }) => <ChevronLeft {...rest} className={cn("h-4 w-4", className)} />,
        IconRight: ({ className, ...rest }) => <ChevronRight {...rest} className={cn("h-4 w-4", className)} />,
      }}
    />
  );
};
Calendar.displayName = "Calendar";

export { Calendar };
