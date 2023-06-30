import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";

const DemoAvatar = () => {
  return (
    <div className="flex w-full items-center justify-center gap-4">
      <Avatar>
        <AvatarImage
          src="https://cdn.discordapp.com/avatars/259725020534669313/b3378ac773b78f64ee4d2343d411f908.webp"
          alt="@smolcheeld"
        />
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
