import React from "react";
import { Switch } from "@/components/ui/Switch";
import { Label } from "@/components/ui/Label";

const DemoSwitch = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-2">
      <div className="flex items-center space-x-2">
        <Switch id="airplaneMode" />
        <Label htmlFor="airplaneMode">Airplane Mode</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch aria-invalid id="carMode" />
        <Label htmlFor="carMode">Invalid Switch</Label>
      </div>
    </div>
  );
};

export default DemoSwitch;
