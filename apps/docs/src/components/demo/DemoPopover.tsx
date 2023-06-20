"use client";
import React, { useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select";
import { SheetPosition } from "@/components/ui/Sheet";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/Dialog";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/Popover";

const DemoPopover = () => {
  const [position, setPosition] = useState<SheetPosition>("right");

  return (
    <div className="flex flex-col gap-[inherit] w-full">
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

      <Popover>
        <PopoverTrigger asChild>
          <Button className="max-w-max self-center">Open popover</Button>
        </PopoverTrigger>
        <PopoverContent side={position}>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="max-w-max" variants={{ type: "secondary" }}>
                Edit Profile
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="text-xl">Edit profile</DialogTitle>
                <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4">
                <Popover>
                  <PopoverTrigger>Popover</PopoverTrigger>
                  <PopoverContent className="z-[51]">Hi!</PopoverContent>
                </Popover>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="username">Username</label>
                  <Input variants={{ size: "sm" }} id="username" defaultValue="@peduarte" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variants={{ size: "sm", type: "secondary" }}>Discard Changes</Button>
                </DialogClose>
                <Button variants={{ size: "sm" }} type="submit">
                  Save changes
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
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
    </div>
  );
};

export default DemoPopover;
