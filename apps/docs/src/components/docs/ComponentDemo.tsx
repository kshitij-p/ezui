import React from "react";
import { registryComponents } from "@/registry";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/Tabs";
import CodeBlock from "./CodeBlock";

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

  return (
    <>
      <Tabs className="w-full" defaultValue="preview">
        <TabsList className="flex w-full flex-wrap items-center">
          <TabsTrigger className="w-1/2" value="preview">
            Preview
          </TabsTrigger>
          <TabsTrigger className="w-1/2" value="code">
            Code
          </TabsTrigger>
        </TabsList>
        <TabsContent value="preview">
          <CodeBlock className="bg-background">{DemoComponent}</CodeBlock>
        </TabsContent>
        <TabsContent value="code">
          <CodeBlock>{CodeLines}</CodeBlock>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default ComponentDemo;
