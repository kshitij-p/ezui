import React from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/Tooltip";
import { Button } from "../ui/Button";

const DemoTooltip = () => {
  return (
    <div className="flex w-full items-center gap-4">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variants={{ type: "secondary" }}>Tooltip hover me</Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>Hello there</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variants={{ type: "secondary" }}>Tooltip hover me</Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Hello there</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variants={{ type: "secondary" }}>Tooltip hover me</Button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>Hello there</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variants={{ type: "secondary" }}>Tooltip hover me</Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Hello there</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default DemoTooltip;
