"use client";

import React, { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/Collapsible";
import { ChevronsUpDown, X } from "lucide-react";

const DemoCollapsible = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex w-full flex-col items-center">
      <Collapsible open={open} onOpenChange={setOpen}>
        <div className="flex items-center justify-center gap-2">
          <span>@peduarte starred 3 repositories</span>
          <CollapsibleTrigger asChild>
            <button>{open ? <X /> : <ChevronsUpDown />}</button>
          </CollapsibleTrigger>
        </div>

        <div>
          <span>@radix-ui/primitives</span>
        </div>

        <CollapsibleContent>
          <div>
            <span>@radix-ui/colors</span>
          </div>
          <div>
            <span>@stitches/react</span>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default DemoCollapsible;
