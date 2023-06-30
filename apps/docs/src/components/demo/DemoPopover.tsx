"use client";
import React from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/Popover";

const DemoPopover = () => {
  return (
    <div className="flex w-full justify-center gap-4">
      {(["top", "bottom", "left", "right"] as const).map((dir) => (
        <Popover key={dir}>
          <PopoverTrigger asChild>
            <Button variants={{ type: "secondary" }} className="max-w-max self-center">
              Open {dir}
            </Button>
          </PopoverTrigger>
          <PopoverContent side={dir}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="name" className="text-right">
                  Name
                </label>
                <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="username" className="text-right">
                  Username
                </label>
                <Input id="username" defaultValue="@peduarte" className="col-span-3" />
              </div>
            </div>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  );
};

export default DemoPopover;
