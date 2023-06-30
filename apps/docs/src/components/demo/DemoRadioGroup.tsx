import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/RadioGroup";
import { Label } from "@/components/ui/Label";

const DemoRadioGroup = () => {
  return (
    <div className="flex flex-col gap-2">
      <b>Pick a cat name</b>
      <RadioGroup>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="orang" id="pick-cat-radio-orang" />
          <Label htmlFor="pick-cat-radio-orang">Orang</Label>
        </div>

        <div className="flex items-center gap-2">
          <RadioGroupItem value="meowsers" id="pick-cat-radio-meowsers" />
          <Label htmlFor="pick-cat-radio-meowsers">Sir Meowsers</Label>
        </div>

        <div className="flex items-center gap-2">
          <RadioGroupItem aria-invalid value="doug" id="pick-cat-radio-doug" />
          <Label htmlFor="pick-cat-radio-doug">Doug</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem aria-invalid value="noname" disabled id="pick-cat-radio-noname" />
          <Label className="text-muted-text" htmlFor="pick-cat-radio-noname">
            noname
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default DemoRadioGroup;
