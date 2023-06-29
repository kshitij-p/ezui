import React from "react";
import DemoAccordion from "../demo/DemoAccordion";
import { registryComponents } from "@/registry";

const ComponentDemo = ({
  children,
  name,
}: React.PropsWithChildren & {
  name: string;
}) => {
  const CodeLines = React.Children.toArray(children);

  const DemoComponent = React.useMemo(() => {
    const comp = registryComponents[name as keyof typeof registryComponents];

    if (!comp) return <p>Couldnt find the demo component for {name}</p>;

    return <comp.demoComponent />;
  }, []);

  console.log(name);

  return (
    <>
      {DemoComponent}
      {CodeLines}
    </>
  );
};

export default ComponentDemo;
