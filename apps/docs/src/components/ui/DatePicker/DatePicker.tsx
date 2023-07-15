"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Calendar } from "@/components/ui/Calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/Popover";
import { selectTriggerClasses } from "@/components/ui/Select";

type DatePickerValue = Date | undefined;

type DatePickerContext = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  value: DatePickerValue;
  onValueChange: (option: DatePickerValue) => void;
  defaultValue?: DatePickerValue;
  mode: React.ComponentPropsWithoutRef<typeof Calendar>["mode"];
};

const DatePickerContext = React.createContext({} as DatePickerContext);

const DatePicker = ({
  children,
  open: passedOpen,
  onOpenChange,
  defaultOpen,
  value: passedValue,
  onValueChange,
  defaultValue,
  mode = "single",
  ...rest
}: React.ComponentPropsWithoutRef<typeof Popover> & {
  value?: DatePickerContext["value"];
  onValueChange?: DatePickerContext["onValueChange"];
  defaultValue?: DatePickerContext["defaultValue"];
  mode?: DatePickerContext["mode"];
}) => {
  const [_open, _setOpen] = React.useState(defaultOpen ?? false);
  const open = passedOpen !== undefined ? passedOpen : _open;
  const setOpen = onOpenChange !== undefined ? onOpenChange : _setOpen;
  const [_value, _setValue] = React.useState<Date | undefined>(defaultValue ?? undefined);

  const value = passedValue !== undefined ? passedValue : _value;
  const setValue = onValueChange !== undefined ? onValueChange : _setValue;

  return (
    <DatePickerContext.Provider value={{ open, onOpenChange: setOpen, value, onValueChange: setValue, mode }}>
      <Popover {...rest} open={open} onOpenChange={setOpen}>
        {children}
      </Popover>
    </DatePickerContext.Provider>
  );
};

const DatePickerTrigger = React.forwardRef<
  React.ElementRef<typeof PopoverTrigger>,
  React.ComponentPropsWithoutRef<typeof PopoverTrigger>
>(({ children, className, asChild, onClick, disabled, ...rest }, passedRef) => {
  return (
    <PopoverTrigger
      {...rest}
      className={!asChild ? cn(selectTriggerClasses, className) : undefined}
      data-disabled={disabled ? true : undefined}
      disabled={disabled}
      asChild={asChild}
      ref={passedRef}
    >
      {children}
    </PopoverTrigger>
  );
});
DatePickerTrigger.displayName = "DatePickerTrigger";

const DEFAULT_DATEPICKER_VALUE_FORMATTER = (date: Date) => format(date, "PPP");

const DatePickerValue = React.forwardRef(
  (
    {
      placeholder = "Select a date",
      formatter = DEFAULT_DATEPICKER_VALUE_FORMATTER,
      ...rest
    }: React.HTMLAttributes<HTMLSpanElement> & {
      placeholder?: string;
      formatter?: typeof DEFAULT_DATEPICKER_VALUE_FORMATTER;
    },
    passedRef: React.ForwardedRef<HTMLSpanElement>
  ) => {
    const { value } = React.useContext(DatePickerContext);

    return (
      <span {...rest} ref={passedRef}>
        {value ? formatter(value) : placeholder}
      </span>
    );
  }
);
DatePickerValue.displayName = "DatePickerValue";

const DatePickerContent = PopoverContent;

const DatePickerCalendar = (
  props: Omit<React.ComponentPropsWithoutRef<typeof Calendar>, "mode" | "selected" | "onSelect" | "initialFocus">
) => {
  const { value, onValueChange, mode } = React.useContext(DatePickerContext);

  return <Calendar {...props} mode={mode as "single"} selected={value} onSelect={onValueChange} initialFocus />;
};

export function DatePickerDemo() {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variants={{ type: "secondary" }}
          className={cn("w-[280px] justify-start text-left font-normal", !date && "text-muted-foreground")}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
      </PopoverContent>
    </Popover>
  );
}

export { DatePicker, DatePickerContext, DatePickerTrigger, DatePickerValue, DatePickerContent, DatePickerCalendar };
