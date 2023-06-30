import React from "react";
import { Badge } from "@/components/ui/Badge";

const DemoBadge = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <p>By default badges have no focus. For demo purposes, it has been added</p>
      <Badge tabIndex={0} variants={{ type: "primary" }}>
        Badge
      </Badge>
      <Badge tabIndex={0} variants={{ type: "outline" }}>
        Badge
      </Badge>
      <Badge tabIndex={0} variants={{ type: "secondary" }}>
        Badge
      </Badge>
      <Badge tabIndex={0} variants={{ type: "danger" }}>
        Badge
      </Badge>
      <Badge tabIndex={0} variants={{ type: "danger-secondary" }}>
        Badge
      </Badge>
    </div>
  );
};

export default DemoBadge;
