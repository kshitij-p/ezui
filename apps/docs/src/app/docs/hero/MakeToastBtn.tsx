"use client";

import { Button } from "@/components/ui/Button";
import { ToastAction, useToast } from "@/components/ui/Toast";
import React from "react";

const MakeToastBtn = () => {
  const { toast } = useToast();

  return (
    <Button
      variants={{ type: "secondary", size: "md" }}
      className="bg-transparent"
      onClick={() => {
        toast({
          title: "Cheers you made a toast",
          description: "Have a good day :D",
          action: <ToastAction altText="Close this toast">Close</ToastAction>,
        });
      }}
    >
      Make a toast
    </Button>
  );
};

export default MakeToastBtn;
