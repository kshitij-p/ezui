"use client";

import React, { useState } from "react";
import { Checkbox } from "@/components/ui/Checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";

const DemoCheckbox = () => {
  const [checked, setChecked] = useState<CheckedState>("indeterminate");

  return (
    <div className="flex w-full flex-col items-center justify-center gap-2">
      <Checkbox />
      <Checkbox aria-invalid />
      <div className="flex items-center gap-2">
        <Checkbox checked={checked} onCheckedChange={setChecked} />
        <button
          type="button"
          onClick={() => setChecked((prevIsChecked) => (prevIsChecked === "indeterminate" ? false : "indeterminate"))}
        >
          Toggle indeterminate
        </button>
      </div>
    </div>
  );
};

export default DemoCheckbox;
