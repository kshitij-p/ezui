import React from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/ToggleGroup";
import { AlignCenter, AlignLeft, AlignRight } from "lucide-react";

const DemoToggleGroup = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-4">
      <div className="flex flex-col flex-wrap items-center gap-4">
        <div className="flex flex-col flex-wrap items-center gap-2">
          <b className="text-sm font-semibold">Single button group with auto adjusted borders</b>
          <ToggleGroup type="single" defaultValue="center" aria-label="Text alignment">
            <ToggleGroupItem value="left" aria-label="Left aligned">
              <AlignLeft className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        <div className="flex flex-col flex-wrap items-center gap-2">
          <b className="text-sm font-semibold">Multiple button group with auto adjusted borders</b>
          <ToggleGroup type="single" defaultValue="center" aria-label="Text alignment">
            <ToggleGroupItem value="left" aria-label="Left aligned">
              <AlignLeft className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Center aligned">
              <AlignCenter className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Right aligned">
              <AlignRight className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        <div className="flex flex-col flex-wrap items-center gap-2">
          <b className="text-sm font-semibold">Multiple button group w/o auto adjusted borders</b>
          <ToggleGroup type="single" defaultValue="center" aria-label="Text alignment" autoAdjustBorders={false}>
            <ToggleGroupItem value="left" aria-label="Left aligned">
              <AlignLeft className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Center aligned">
              <AlignCenter className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Right aligned">
              <AlignRight className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        <div className="flex flex-col flex-wrap items-center gap-2">
          <b className="text-sm font-semibold">All options disabled</b>
          <ToggleGroup disabled type="single" defaultValue="center" aria-label="Text alignment">
            <ToggleGroupItem value="left" aria-label="Left aligned">
              <AlignLeft className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Center aligned">
              <AlignCenter className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Right aligned">
              <AlignRight className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        <div className="flex flex-col flex-wrap items-center gap-2">
          <b className="text-sm font-semibold">Some options disabled</b>
          <ToggleGroup type="single" defaultValue="center" aria-label="Text alignment">
            <ToggleGroupItem disabled value="left" aria-label="Left aligned">
              <AlignLeft className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Center aligned">
              <AlignCenter className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Right aligned">
              <AlignRight className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
      <div className="flex flex-col flex-wrap items-center gap-2">
        <b className="text-sm font-semibold">Multiple button group with multiple selectable</b>
        <ToggleGroup type="multiple" aria-label="Text alignment">
          <ToggleGroupItem value="left" aria-label="Left aligned">
            <AlignLeft className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Center aligned">
            <AlignCenter className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Right aligned">
            <AlignRight className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  );
};

export default DemoToggleGroup;
