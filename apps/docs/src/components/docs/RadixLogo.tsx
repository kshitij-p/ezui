import { LucideProps } from "lucide-react";
import React, { ForwardedRef } from "react";

const RadixLogo = React.forwardRef((props: LucideProps, passedRef: ForwardedRef<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 25 25" fill="none" {...props} ref={passedRef}>
      <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z" fill="currentcolor"></path>
      <path d="M12 0H4V8H12V0Z" fill="currentcolor"></path>
      <path
        d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"
        fill="currentcolor"
      ></path>
    </svg>
  );
});

export default RadixLogo;
