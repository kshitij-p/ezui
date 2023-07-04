import { Button } from "@/components/ui/Button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";

import Link from "next/link";

import Music from "./examples/Music";
import Dashboard from "./examples/Dashboard";
import Cards from "./examples/Cards";
import Forms from "./examples/Forms";

const Home = () => {
  //Todo refactor client components to their own folder - remove use client at the top to figure out which are client comps

  return (
    <div className="container mx-auto flex w-full flex-col py-8 xl:max-w-[1400px]">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-center text-2xl">
          Beautiful customizable UI made <b className="font-black text-primary">Easy</b>
        </h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ex commodi sunt provident, officiis
          distinctio aliquid debitis beatae illo non alias molestias eligendi vel nobis labore voluptates velit
          quibusdam laudantium!
        </p>
        <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2">
          <Button asChild>
            <Link href={"/docs"}>Get Started</Link>
          </Button>
          <Button asChild variants={{ type: "secondary" }}>
            <Link href={"/docs/components/Accordion"}>Documentation</Link>
          </Button>
        </div>
      </div>
      <div className="mt-20">
        <Tabs defaultValue="dashboard">
          <TabsList className="max-w-full justify-normal overflow-y-auto">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="cards">Cards</TabsTrigger>
            <TabsTrigger value="forms">Forms</TabsTrigger>
            <TabsTrigger value="music">Music</TabsTrigger>
          </TabsList>
          <div className="mt-3 overflow-hidden rounded-xl border shadow">
            <TabsContent tabIndex={-1} value="dashboard">
              <Dashboard />
            </TabsContent>
            <TabsContent tabIndex={-1} value="cards">
              <Cards />
            </TabsContent>
            <TabsContent tabIndex={-1} value="forms">
              <Forms />
            </TabsContent>
            <TabsContent tabIndex={-1} className="mt-0" value="music">
              <Music />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Home;
