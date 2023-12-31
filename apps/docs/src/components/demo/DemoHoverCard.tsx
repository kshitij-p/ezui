import React from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/HoverCard";
import { Button } from "@/components/ui/Button";
import { CalendarDays } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";

const DemoHoverCard = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex flex-wrap items-center">
        {(["left", "top", "right", "bottom"] as const).map((dir) => (
          <HoverCard key={dir}>
            <HoverCardTrigger asChild>
              <Button variants={{ type: "ghost" }}>@nextjs bottom</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80" side={dir}>
              <div className="flex justify-between space-x-4">
                <Avatar>
                  <AvatarImage src="https://github.com/vercel.png" />
                  <AvatarFallback>VC</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">@nextjs</h4>
                  <p className="text-sm">The React Framework – created and maintained by @vercel.</p>
                  <div className="flex items-center pt-2">
                    <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                    <span className="text-xs text-light-text">Joined December 2021</span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </div>
  );
};

export default DemoHoverCard;
