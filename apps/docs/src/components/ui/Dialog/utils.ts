//Shared util vars among Dialog, AlertDialog and Sheet components

//Extend this to extend available positions for Dialog, AlertDialog, Sheet, etc
export const DEFAULT_DIALOG_POSITION = { x: "center", y: "center" } as {
  x: "left" | "center" | "right";
  y: "top" | "center" | "bottom";
};

export type DialogPosition = typeof DEFAULT_DIALOG_POSITION;

export const dialogPositionLookup: {
  x: {
    [k in DialogPosition["x"]]: string;
  };
  y: {
    [k in DialogPosition["y"]]: string;
  };
} = {
  x: {
    left: "left-0",
    center: "left-1/2 -translate-x-1/2",
    right: "right-0",
  },
  y: {
    top: "top-0",
    center: "top-1/2 -translate-y-1/2",
    bottom: "bottom-0",
  },
};

//Extend this to extend available animations for Dialog, AlertDialog, Sheet, etc
export const dialogAnimationLookup = {
  zoom: "animate-zoomIn data-[state='closed']:animate-zoomOut",
  slideLeft: "animate-slideInLeft data-[state='closed']:animate-slideOutLeft",
  slideRight: "animate-slideInRight data-[state='closed']:animate-slideOutRight",
  slideTop: "animate-slideInTop data-[state='closed']:animate-slideOutTop",
  slideBottom: "animate-slideInBottom data-[state='closed']:animate-slideOutBottom",
  none: "",
} as const;

export type DialogAnimation = keyof typeof dialogAnimationLookup;
