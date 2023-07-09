import React from "react";
import { Checkbox } from "../ui/Checkbox";
import { Label } from "../ui/Label";

const DemoLabel = () => {
  return (
    <div className="grid w-full place-content-center place-items-center">
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    </div>
  );
};

export default DemoLabel;
