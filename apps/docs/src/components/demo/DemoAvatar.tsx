import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";

const DemoAvatar = () => {
  return (
    <div className="flex w-full items-center justify-center gap-4">
      <Avatar>
        <AvatarImage src="/me.webp" alt="@smolcheeld" />
        <AvatarFallback>Smol</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="somebrokenurl" alt="@smolcheeld" />
        <AvatarFallback>Smol</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default DemoAvatar;
