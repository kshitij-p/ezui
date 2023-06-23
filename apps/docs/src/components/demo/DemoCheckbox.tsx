"use client";

import React, { useState } from "react";
import { Checkbox } from "../ui/Checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";

const DemoCheckbox = () => {
  const [checked, setChecked] = useState<CheckedState>("indeterminate");

  return (
    <div className="flex w-full gap-2">
      <Checkbox />
      <Checkbox checked={checked} onCheckedChange={setChecked} />
      <button
        type="button"
        onClick={() => setChecked((prevIsChecked) => (prevIsChecked === "indeterminate" ? false : "indeterminate"))}
      >
        Toggle indeterminate
      </button>
    </div>
  );
};

export default DemoCheckbox;