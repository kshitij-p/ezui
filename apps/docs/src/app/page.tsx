import { Button } from "@/components/ui/Button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";

import Link from "next/link";

import Music from "./examples/Music";
import Dashboard from "./examples/Dashboard";
import Cards from "./examples/Cards";
import Forms from "./examples/Forms";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-4 px-6 pt-8 lg:grid lg:min-h-[50vh] lg:grid-cols-2 lg:px-0 lg:pt-0">
        <div className="grid place-content-center place-items-start">
          <div className="flex max-w-[30em] flex-col items-center gap-4 lg:items-start lg:pl-6 lg:pt-8">
            <h1 className="text-center text-[clamp(2.625rem,1.2857rem+3.5714vw,4rem)] leading-[1.1] lg:text-left">
              Beautiful customizable UI made <b className="font-black text-primary">Easy</b>
            </h1>
            <p className="text-center lg:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ex commodi sunt provident, officiis
              distinctio aliquid debitis beatae illo non alias molestias eligendi vel nobis labore voluptates velit
              quibusdam laudantium!
            </p>
            <div className="mt-2 grid w-full grid-cols-1 gap-4 md:grid-cols-2">
              <Button className="w-full" asChild>
                <Link href={"/docs"}>Get Started</Link>
              </Button>
              <Button className="w-full" asChild variants={{ type: "secondary" }}>
                <Link href={"/docs/components/Accordion"}>Documentation</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="hidden h-full w-full rounded-lg bg-paper lg:flex lg:flex-col lg:px-6 lg:py-8">
          <Card className="border-border/50 bg-gradient-to-b from-accent/10 to-accent/20">
            <CardHeader>
              <CardTitle>Check out ezui component library and read the docs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <Avatar className="rounded-xl">
                  <AvatarImage
                    src="https://cdn.discordapp.com/avatars/259725020534669313/b3378ac773b78f64ee4d2343d411f908.webp"
                    alt="@smolcheeld"
                  />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <p className="text-xs leading-3 text-light-text">Assigned to</p>
                  <b>You</b>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variants={{ size: "sm", type: "secondary" }}>Mark as done</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className="container mx-auto flex w-full flex-col px-6 py-8 xl:max-w-[1400px]">
        <div className="mt-10 lg:mt-20">
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
    </div>
  );
};

export default Home;
