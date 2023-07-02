import React from "react";
import { ALL_BUTTON_VARIANTS, Button } from "@/components/ui/Button";
import Link from "next/link";

const DemoButton = () => {
  return (
    <div className="flex w-full flex-wrap justify-center gap-6">
      {Object.keys(ALL_BUTTON_VARIANTS.type).map((type) => (
        <div key={type} className="flex flex-col items-center gap-2">
          <h3 className="capitalize">{type}</h3>
          <div className="flex max-w-full flex-col items-center gap-8">
            {Object.keys(ALL_BUTTON_VARIANTS.size).map((size) => (
              <Button
                key={size}
                variants={{
                  size: size as keyof typeof ALL_BUTTON_VARIANTS.size,
                  type: type as keyof typeof ALL_BUTTON_VARIANTS.type,
                }}
              >
                Settings
              </Button>
            ))}
          </div>
        </div>
      ))}
      <div className="flex flex-col items-center">
        <h3>Button as a link</h3>
        <div className="flex max-w-full flex-col items-center gap-8">
          <Button asChild variants={{ size: "xs", type: "primary" }}>
            <Link href={"#"}>Link demo</Link>
          </Button>
          <Button asChild variants={{ size: "sm", type: "primary" }}>
            <Link href={"#"}>Link demo</Link>
          </Button>
          <Button asChild variants={{ size: "md", type: "primary" }}>
            <Link href={"#"}>Link demo</Link>
          </Button>
          <Button asChild variants={{ size: "lg", type: "primary" }}>
            <Link href={"#"}>Link demo</Link>
          </Button>
          <Button asChild variants={{ size: "xl", type: "primary" }}>
            <Link href={"#"}>Link demo</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DemoButton;
