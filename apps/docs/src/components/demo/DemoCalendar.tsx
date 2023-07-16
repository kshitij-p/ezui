"use client";

import React, { useState } from "react";
import { Calendar } from "../ui/Calendar/Calendar";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";

const DemoCalendar = () => {
  //Single date calendar
  const [date, setDate] = useState<Date | undefined>(new Date());

  //Multiple date calendar
  const [multipleDates, setMultipleDates] = useState<Date[] | undefined>([new Date(), addDays(new Date(), 1)]);

  //Range date calendar
  const [rangeDate, setRangeDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  });

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <div className="flex flex-col items-center gap-1">
        <b>Single Date Mode</b>
        <Calendar className="rounded-md border" mode="single" selected={date} onSelect={setDate} />
      </div>
      <div className="flex flex-col items-center gap-1">
        <b>Multiple Dates Mode</b>
        <Calendar className="rounded-md border" mode="multiple" selected={multipleDates} onSelect={setMultipleDates} />
      </div>
      <div className="flex flex-col items-center gap-1">
        <b>Range Mode</b>
        <Calendar className="rounded-md border" mode="range" selected={rangeDate} onSelect={setRangeDate} />
      </div>
      <div className="flex flex-col items-center gap-1">
        <b>Default Mode</b>
        <Calendar className="rounded-md border" mode="default" />
      </div>
    </div>
  );
};

export default DemoCalendar;
