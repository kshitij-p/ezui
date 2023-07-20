import * as React from "react";
import { cn } from "@/lib/utils";
import { DEFAULT_VARIANTS, InputVariants, inputVariants } from "@/components/ui/Input";

const Textarea = React.forwardRef(
  (
    {
      className,
      variants = DEFAULT_VARIANTS,
      ...rest
    }: React.ComponentPropsWithoutRef<"textarea"> & {
      variants?: Partial<InputVariants>;
    },
    passedRef: React.ForwardedRef<HTMLTextAreaElement>
  ) => {
    return (
      <textarea {...rest} className={cn(inputVariants(variants), "h-unset min-h-[60px]", className)} ref={passedRef} />
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
