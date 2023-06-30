"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { useToast, ToastAction } from "@/components/ui/Toast";

const DemoToast = () => {
  const { toast } = useToast();

  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-2">
      <Button
        variants={{ type: "secondary" }}
        onClick={() => {
          toast({
            title: "Scheduled: Catch up ",
            description: "Friday, February 10, 2023 at 5:57 PM",
            action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
          });
        }}
      >
        Make a toast
      </Button>
      <Button
        variants={{ type: "danger-secondary" }}
        onClick={() => {
          toast({
            title: "Cats on your way",
            description: "A million cats are on their way to you!",
            action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
            //Sets the sensitivity - how screen readers and announcers shld prioritise the toast's msg
            //Basically foreground = important msg, background = not important msg
            //For more info https://www.radix-ui.com/docs/primitives/components/toast#sensitivity
            type: "foreground",
            variants: { type: "danger" },
          });
        }}
      >
        Make a dangerous toast
      </Button>
    </div>
  );
};

export default DemoToast;
