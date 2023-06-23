"use client";

import React, { ForwardedRef, useContext, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/Popover";
import { ChevronDown } from "lucide-react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/Command";

import { selectTriggerClasses } from "@/components/ui/Select";
import { ScrollAreaRoot, ScrollAreaViewport, ScrollBar } from "@/components/ui/ScrollArea";
import { cn } from "@/lib/utils";

type AutocompleteOption = Record<string, unknown> | string;

type AutocompleteContext = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  value: AutocompleteOption | null;
  onValueChange: (option: AutocompleteOption) => void;
  defaultValue?: AutocompleteOption;
  options: Array<AutocompleteOption> | readonly string[];
  label: keyof AutocompleteOption | never;
};

const AutocompleteContext = React.createContext({} as AutocompleteContext);

const getValue = <TOption extends AutocompleteOption>(option: TOption, label: keyof TOption) => {
  if (typeof option === "string") return option;
  return option[label] as string;
};

type AutocompleteBaseProps<TOption extends AutocompleteOption> = {
  options: Array<TOption> | readonly string[];
  open?: AutocompleteContext["open"];
  value?: TOption;
  onValueChange?: (option: TOption) => void;
  defaultValue?: TOption;
};

type AutocompleteProps<TOption extends string | Record<string, unknown>> = AutocompleteBaseProps<TOption> &
  (TOption extends Record<string, unknown>
    ? {
        label: keyof TOption;
      }
    : {
        label?: never;
      });

const Autocomplete = <TOption extends string | Record<string, unknown>>({
  children,
  options,
  open: passedOpen,
  onOpenChange,
  value: passedValue,
  defaultOpen,
  onValueChange,
  defaultValue,
  label = "label",
  ...rest
}: React.ComponentPropsWithoutRef<typeof Popover> & AutocompleteProps<TOption>) => {
  const [_open, _setOpen] = useState(defaultOpen ?? false);
  const open = passedOpen !== undefined ? passedOpen : _open;
  const setOpen = onOpenChange !== undefined ? onOpenChange : _setOpen;
  const [_value, _setValue] = React.useState<TOption | null>(defaultValue ?? null);
  const value = passedValue !== undefined ? passedValue : _value;
  const setValue = onValueChange !== undefined ? onValueChange : _setValue;

  //Todo make everything pass refs and respect asChild
  //Todo check and complete all todos

  return (
    <AutocompleteContext.Provider
      value={{
        defaultValue,
        open,
        onOpenChange: setOpen,
        onValueChange: setValue as (option: AutocompleteOption) => void,
        value,
        options,
        label: label as keyof AutocompleteOption | never,
      }}
    >
      <Popover {...rest} open={open} onOpenChange={setOpen}>
        {children}
      </Popover>
    </AutocompleteContext.Provider>
  );
};

const AutocompleteTrigger = React.forwardRef<
  React.ElementRef<typeof PopoverTrigger>,
  React.ComponentPropsWithoutRef<typeof PopoverTrigger>
>(({ children, className, asChild, onClick, disabled, ...rest }, passedRef) => {
  //To do make autocomplet support disabled

  return (
    <PopoverTrigger
      {...rest}
      className={!asChild ? cn(selectTriggerClasses, className) : undefined}
      asChild={asChild}
      ref={passedRef}
    >
      {children}
    </PopoverTrigger>
  );
});
AutocompleteTrigger.displayName = "AutocompleteTrigger";

const AutocompleteValue = React.forwardRef(
  (
    {
      className,
      placeholder = "Select a value",
      ...rest
    }: Omit<React.ComponentPropsWithoutRef<"span">, "children"> & {
      placeholder?: string;
    },
    passedRef: ForwardedRef<HTMLSpanElement>
  ) => {
    const { value, label } = useContext(AutocompleteContext);

    return (
      <span {...rest} className={cn("flex items-center justify-center gap-2", className)} ref={passedRef}>
        {value ? getValue(value, label) : placeholder}
        <ChevronDown className="ml-auto h-4 w-4 rotate-0 opacity-50 transition group-data-[state='open']:rotate-180" />
      </span>
    );
  }
);
AutocompleteValue.displayName = "AutocompleteValue";

const AutocompleteInput = CommandInput;

const AutocompleteContent = React.forwardRef<
  React.ElementRef<typeof PopoverContent>,
  React.ComponentPropsWithoutRef<typeof PopoverContent> & {
    input?: React.ReactNode;
  }
>(({ children, className, input = <AutocompleteInput />, sideOffset = 8, ...rest }, passedRef) => {
  return (
    //PopoverContent also uses the cn util so no need to use it again here
    <PopoverContent {...rest} sideOffset={sideOffset} className={`w-[200px] p-0 ${className}`} ref={passedRef}>
      <Command className="p-2 shadow-none">
        {input}
        <CommandEmpty>No framework found.</CommandEmpty>
        <ScrollAreaRoot>
          <CommandGroup>
            <ScrollAreaViewport className="max-h-56">{children}</ScrollAreaViewport>
          </CommandGroup>
          <ScrollBar />
        </ScrollAreaRoot>
      </Command>
    </PopoverContent>
  );
});
AutocompleteContent.displayName = "AutocompleteContent";

const AutocompleteItem = React.forwardRef<
  React.ElementRef<typeof CommandItem>,
  Omit<React.ComponentPropsWithoutRef<typeof CommandItem>, "value"> & {
    value: AutocompleteOption;
  }
>(({ children, className, value, ...rest }, passedRef) => {
  const { onValueChange, onOpenChange } = useContext(AutocompleteContext);

  return (
    <CommandItem
      {...rest}
      className={className}
      onSelect={() => {
        onValueChange(value);
        onOpenChange(false);
      }}
      ref={passedRef}
    >
      {children}
    </CommandItem>
  );
});
AutocompleteItem.displayName = "AutocompleteItem";

export {
  Autocomplete,
  AutocompleteTrigger,
  AutocompleteValue,
  AutocompleteInput,
  AutocompleteContent,
  AutocompleteItem,
  AutocompleteContext,
};
