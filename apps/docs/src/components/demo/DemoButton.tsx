import React from "react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const DemoButton = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex max-w-full flex-col items-center gap-8">
        <Button variants={{ size: "xs" }}>Settings</Button>
        <Button variants={{ size: "sm" }}>Settings</Button>
        <Button variants={{ size: "md" }}>Settings</Button>
        <Button variants={{ size: "lg" }}>Settings</Button>
        <Button variants={{ size: "xl" }}>Settings</Button>
      </div>
      <div className="flex flex-col items-center gap-8">
        <Button variants={{ size: "xs", type: "secondary" }}>Settings</Button>
        <Button variants={{ size: "sm", type: "secondary" }}>Settings</Button>
        <Button variants={{ size: "md", type: "secondary" }}>Settings</Button>
        <Button variants={{ size: "lg", type: "secondary" }}>Settings</Button>
        <Button variants={{ size: "xl", type: "secondary" }}>Settings</Button>
      </div>
      <div className="flex flex-col items-center gap-8">
        <Button variants={{ size: "xs", type: "danger" }}>Settings</Button>
        <Button variants={{ size: "sm", type: "danger" }}>Settings</Button>
        <Button variants={{ size: "md", type: "danger" }}>Settings</Button>
        <Button variants={{ size: "lg", type: "danger" }}>Settings</Button>
        <Button variants={{ size: "xl", type: "danger" }}>Settings</Button>
      </div>
      <div className="flex flex-col items-center gap-8">
        <Button variants={{ size: "xs", type: "danger-secondary" }}>Settings</Button>
        <Button variants={{ size: "sm", type: "danger-secondary" }}>Settings</Button>
        <Button variants={{ size: "md", type: "danger-secondary" }}>Settings</Button>
        <Button variants={{ size: "lg", type: "danger-secondary" }}>Settings</Button>
        <Button variants={{ size: "xl", type: "danger-secondary" }}>Settings</Button>
      </div>
      <div className="flex flex-col items-center gap-8">
        <Button variants={{ size: "xs", type: "ghost" }}>Settings</Button>
        <Button variants={{ size: "sm", type: "ghost" }}>Settings</Button>
        <Button variants={{ size: "md", type: "ghost" }}>Settings</Button>
        <Button variants={{ size: "lg", type: "ghost" }}>Settings</Button>
        <Button variants={{ size: "xl", type: "ghost" }}>Settings</Button>
      </div>
      <div className="flex flex-col items-center gap-8">
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
  );
};

export default DemoButton;
