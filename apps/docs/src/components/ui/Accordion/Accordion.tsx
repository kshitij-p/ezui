"use client";

import * as React from "react";
import * as RadixAccordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const Accordion = RadixAccordion.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof RadixAccordion.Item>,
  React.ComponentPropsWithoutRef<typeof RadixAccordion.Item>
>(({ className, ...rest }, passedRef) => (
  <RadixAccordion.Item {...rest} className={cn("border-b", className)} ref={passedRef} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof RadixAccordion.Trigger>,
  React.ComponentPropsWithoutRef<typeof RadixAccordion.Trigger>
>(({ className, children, ...rest }, passedRef) => (
  <RadixAccordion.Header className="flex">
    <RadixAccordion.Trigger
      {...rest}
      className={cn(
        "group flex flex-1 items-center justify-between rounded-sm py-4 font-medium decoration-primary underline-offset-4 transition hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/75 focus-visible:ring-offset-0 focus-visible:ring-offset-background data-[state=open]:text-primary data-[state=open]:underline",
        className
      )}
      ref={passedRef}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:text-primary" />
    </RadixAccordion.Trigger>
  </RadixAccordion.Header>
));
AccordionTrigger.displayName = RadixAccordion.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof RadixAccordion.Content>,
  React.ComponentPropsWithoutRef<typeof RadixAccordion.Content>
>(({ className, children, ...rest }, passedRef) => (
  <RadixAccordion.Content
    {...rest}
    className={cn(
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordionUp data-[state=open]:animate-accordionDown",
      className
    )}
    ref={passedRef}
  >
    <div className="pb-4 pt-0">{children}</div>
  </RadixAccordion.Content>
));
AccordionContent.displayName = RadixAccordion.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
