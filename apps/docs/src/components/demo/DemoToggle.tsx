import React from "react";
import { Toggle } from "@/components/ui/Toggle";
import { Cat } from "lucide-react";

const DemoToggle = () => {
  return (
    <div className="flex w-full flex-col items-center gap-4">
      <div className="flex flex-wrap gap-4">
        <div className="flex flex-col gap-2">
          <Toggle variants={{ size: "sm" }}>Meow</Toggle>
          <Toggle variants={{ size: "md" }}>Meow</Toggle>
          <Toggle variants={{ size: "lg" }}>Meow</Toggle>
        </div>
        <div className="flex flex-col gap-2">
          <Toggle variants={{ size: "sm" }}>
            <Cat className="h-4 w-4" />
          </Toggle>
          <Toggle variants={{ size: "md" }}>
            <Cat className="h-4 w-4" />
          </Toggle>
          <Toggle variants={{ size: "lg" }}>
            <Cat className="h-4 w-4" />
          </Toggle>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        Borderless
        <Toggle variants={{ type: "borderless" }}>
          <Cat className="h-4 w-4" />
        </Toggle>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        Disabled
        <Toggle disabled>
          <Cat className="h-4 w-4" />
        </Toggle>
      </div>
    </div>
  );
};

export default DemoToggle;
