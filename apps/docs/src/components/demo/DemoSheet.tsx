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
        <SheetContent position={position}>
          <SheetHeader>
            <SheetTitle asChild>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="max-w-max" variants={{ type: "secondary" }}>
                    Edit Profile
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle className="text-xl">Edit profile</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label htmlFor="name">Name</label>
                      <Input variants={{ size: "sm" }} id="name" defaultValue="Pedro Duarte" className="col-span-3" />
                    </div>
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
            </SheetTitle>
            <SheetDescription>Make changes to your profile here. Click save when you're done.</SheetDescription>
          </SheetHeader>
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
