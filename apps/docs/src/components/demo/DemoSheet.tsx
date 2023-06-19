"use client";
import React, { useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetPosition,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/Sheet";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

const DemoSheet = () => {
  const [position, setPosition] = useState<SheetPosition>("right");

  return (
    <div className="flex flex-col gap-[inherit]">
      <Select value={position} onValueChange={(newPos) => setPosition(newPos as SheetPosition)}>
        <SelectTrigger>
          <SelectValue placeholder="Select sheet position" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="left">left</SelectItem>
            <SelectItem value="right">right</SelectItem>
            <SelectItem value="top">top</SelectItem>
            <SelectItem value="bottom">bottom</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Sheet>
        <SheetTrigger asChild>
          <Button>Open sheet</Button>
        </SheetTrigger>
        <SheetContent
          variants={{
            position,
          }}
        >
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>Make changes to your profile here. Click save when you're done.</SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="name" className="text-right">
                Name
              </label>
              <Input id="name" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="username" className="text-right">
                Username
              </label>
              <Input id="username" value="@peduarte" className="col-span-3" />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default DemoSheet;
