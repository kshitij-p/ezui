import React from "react";
import { Textarea } from "@/components/ui/Textarea";

const DemoTextarea = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex max-w-full flex-col gap-8">
        <Textarea variants={{ size: "xs" }} defaultValue={"The quicky brown fox"} />
        <Textarea variants={{ size: "sm" }} defaultValue={"The quicky brown fox"} />
        <Textarea variants={{ size: "md" }} defaultValue={"The quicky brown fox"} />
        <Textarea variants={{ size: "lg" }} defaultValue={"The quicky brown fox"} />
        <Textarea variants={{ size: "xl" }} defaultValue={"The quicky brown fox"} />
      </div>
    </div>
  );
};

export default DemoTextarea;
