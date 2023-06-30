import React from "react";
import { Input } from "@/components/ui/Input";

const DemoInput = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex max-w-full flex-col gap-8">
        <Input variants={{ size: "xs" }} defaultValue={"The quicky brown fox"} />
        <Input variants={{ size: "sm" }} defaultValue={"The quicky brown fox"} />
        <Input variants={{ size: "md" }} defaultValue={"The quicky brown fox"} />
        <Input variants={{ size: "lg" }} defaultValue={"The quicky brown fox"} />
        <Input variants={{ size: "xl" }} defaultValue={"The quicky brown fox"} />
        <Input aria-invalid variants={{ size: "xl" }} defaultValue={"The quicky brown fox"} />
      </div>
    </div>
  );
};

export default DemoInput;
