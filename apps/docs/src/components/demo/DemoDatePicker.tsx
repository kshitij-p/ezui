import React from "react";
import {
  DatePicker,
  DatePickerCalendar,
  DatePickerContent,
  DatePickerTrigger,
  DatePickerValue,
} from "../ui/DatePicker/DatePicker";

const DemoDatePicker = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <DatePicker>
        <DatePickerTrigger>
          <DatePickerValue />
        </DatePickerTrigger>
        <DatePickerContent>
          <DatePickerCalendar />
        </DatePickerContent>
      </DatePicker>
    </div>
  );
};

export default DemoDatePicker;
