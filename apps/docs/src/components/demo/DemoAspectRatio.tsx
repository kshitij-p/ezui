import React from "react";
import { AspectRatio } from "@/components/ui/AspectRatio";
import Image from "next/image";
import Cat from "../../../public/cat.jpg";
import { Code } from "@/components/ui/Code";

const DemoAspectRatio = () => {
  return (
    <div className="flex w-full flex-col items-center gap-8">
      <div className="flex w-full max-w-md flex-col items-center">
        <AspectRatio ratio={16 / 9}>
          <Image className="inset-0 rounded-md object-cover" src={Cat} alt={"A picture of a really cute cat"} fill />
        </AspectRatio>
        <p className="text-light-text">Aspect Ratio Component</p>
      </div>

      <div className="flex w-full flex-col items-center gap-2">
        <p className="inline-flex items-center gap-1">
          I recommend using the css <Code>aspect-ratio</Code> property instead whenever possible.
          <br />
        </p>
        <div className="relative aspect-[16/9] w-full max-w-md shrink-0">
          <Image className="inset-0 rounded-md object-cover" src={Cat} alt={"A picture of a really cute cat"} fill />
        </div>
        <p className="text-light-text">Pure CSS — aspect-ratio property</p>
      </div>
    </div>
  );
};

export default DemoAspectRatio;
