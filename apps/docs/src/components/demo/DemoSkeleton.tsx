import React from "react";
import { Skeleton } from "../ui/Skeleton";

const DemoSkeleton = () => {
  return (
    <div className="w=full">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    </div>
  );
};

export default DemoSkeleton;
