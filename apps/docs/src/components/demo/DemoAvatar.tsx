import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/Avatar";

const DemoAvatar = () => {
  return (
    <div>
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
