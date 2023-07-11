"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import Dashboard from "./Dashboard";
import Cards from "./Cards";
import Forms from "./Forms";
import Music from "./Music";
import MdxLink from "@/components/docs/MdxLink";

const ExampleTabs = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <div id="examples" className="container mx-auto flex w-full flex-col px-6 py-8 xl:max-w-[1400px]">
      <div className="mt-10 lg:mt-20">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="max-w-full justify-normal overflow-y-auto">
            <TabsTrigger value="Dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="Cards">Cards</TabsTrigger>
            <TabsTrigger value="Forms">Forms</TabsTrigger>
            <TabsTrigger value="Music">Music</TabsTrigger>
          </TabsList>
          <div className="mt-3 overflow-hidden rounded-xl border shadow">
            <TabsContent tabIndex={-1} value="Dashboard">
              <Dashboard />
            </TabsContent>
            <TabsContent tabIndex={-1} value="Cards">
              <Cards />
            </TabsContent>
            <TabsContent tabIndex={-1} value="Forms">
              <Forms />
            </TabsContent>
            <TabsContent tabIndex={-1} className="mt-0" value="Music">
              <Music />
            </TabsContent>
          </div>
        </Tabs>
      </div>
      <div className="mt-8 text-light-text">
        An example recreated by me using <b className="text-foreground">Ezui</b>. Source code available on{" "}
        <MdxLink
          className="font-bold text-foreground"
          href={`https://github.com/kshitij-p/ezui/blob/main/apps/docs/src/app/examples/${activeTab}/${activeTab}.tsx`}
          target="_blank"
        >
          Github
        </MdxLink>
      </div>
    </div>
  );
};

export default ExampleTabs;
