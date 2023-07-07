import { Button } from "@/components/ui/Button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";

import Link from "next/link";

import Music from "./examples/Music";
import Dashboard from "./examples/Dashboard";
import Cards from "./examples/Cards";
import Forms from "./examples/Forms";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import Image from "next/image";
import { Circle, FastForward, Folder, Rewind } from "lucide-react";
import { Play } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/ToggleGroup";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion";
import MakeToastBtn from "./docs/hero/MakeToastBtn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ezui",
  description: "A simple, composable and reusable component library made with Radix UI and TailwindCSS.",
};

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
              Fully own your ui and build beautiful interfaces with components that you can fully customize to match
              your design system. Streamline your development process by making one-off changes not feel unnecessarily
              hard.
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
        <div className="hidden h-full w-full grid-cols-[minmax(270px,1fr)_1fr] place-content-center place-items-center gap-6 rounded-lg bg-paper px-6 py-8 lg:grid">
          <div className="flex flex-col gap-6">
            <Card className="border-border/50 bg-gradient-to-b from-accent/10 to-accent/20">
              <CardHeader>
                <CardTitle className="text-lg xl:text-2xl">
                  Check out Ezui component library and read the docs
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="flex items-start gap-2 xl:gap-3">
                  <Avatar className="h-10 w-10 rounded-xl xl:h-14 xl:w-14">
                    <AvatarImage src="/me.webp" alt="@smolcheeld" />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2 py-[0.1rem] xl:py-2">
                    <p className="text-xs leading-3 text-light-text xl:text-sm">Assigned to</p>
                    <b className="text-base xl:text-lg">You</b>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex-row-reverse">
                <Button className="text-xs xl:text-sm" variants={{ size: "sm", type: "secondary" }}>
                  Mark as done
                </Button>
              </CardFooter>
            </Card>
            <div className="flex items-start gap-4 rounded-md border bg-gradient-to-b from-paper to-muted/50 p-4">
              <div className="relative max-w-[95px] overflow-hidden rounded-sm shadow">
                <Image
                  src={"/examples/music/stSundowning.jpeg"}
                  alt="A cover image of the song Bloodsport by Sleep Token"
                  width={640}
                  height={640}
                  className="aspect-square h-auto w-auto border dark:border-0"
                />
              </div>
              <div className="space-y-1 py-1 xl:space-y-2 2xl:space-y-2.5">
                <div>
                  <b className="2xl:text-lg">Bloodsport</b>
                  <div className="flex items-center gap-1 whitespace-pre text-xs text-light-text 2xl:text-sm">
                    Sleep Token
                    <Circle className="h-1 w-1 fill-light-text text-light-text" />
                    Sundowning
                  </div>
                </div>
                <div className="flex items-center gap-1 xl:gap-1.5">
                  <Button
                    variants={{ type: "secondary", size: "xs" }}
                    disabled
                    className="h-auto rounded-full px-2 py-2"
                  >
                    <Rewind className="h-2.5 w-2.5 fill-accent/50 text-border xl:h-3 xl:w-3 2xl:h-4 2xl:w-4" />
                  </Button>
                  <Button variants={{ type: "secondary", size: "xs" }} className="h-auto rounded-full px-2 py-2">
                    <Play className="h-2.5 w-2.5 fill-accent/50 text-border xl:h-3 xl:w-3 2xl:h-4 2xl:w-4" />
                  </Button>
                  <Button
                    disabled
                    variants={{ type: "secondary", size: "xs" }}
                    className="h-auto rounded-full px-2 py-2"
                  >
                    <FastForward className="h-2.5 w-2.5 fill-accent/50 text-border xl:h-3 xl:w-3 2xl:h-4 2xl:w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-full w-full flex-col gap-4 overflow-hidden">
            <ToggleGroup
              className="hidden flex-wrap-reverse items-center [@media(min-width:1200px)]:flex"
              type="single"
              defaultValue="react"
            >
              <ToggleGroupItem className="p-4 text-base" value="react">
                React
              </ToggleGroupItem>
              <ToggleGroupItem className="p-4 text-base" value="vue">
                Vue
              </ToggleGroupItem>
              <ToggleGroupItem className="p-4 text-base" value="svelte">
                Svelte
              </ToggleGroupItem>
            </ToggleGroup>
            <Accordion
              className="rounded-md border bg-gradient-to-b from-muted/10 to-muted/50"
              collapsible
              type="single"
              defaultValue="readme"
            >
              <AccordionItem className="rounded-md border-0 px-6 pb-2 pt-4" value="readme">
                <AccordionTrigger className="border-b border-transparent text-left hover:no-underline data-[state=open]:border-separator data-[state=open]:text-foreground data-[state=open]:no-underline [&>svg]:hidden xl:[&>svg]:inline">
                  <div className="flex flex-col gap-4 xl:flex-row  xl:items-center xl:gap-5">
                    <Folder className="fill-foreground" />
                    <div className="flex flex-col gap-1">
                      <p className="truncate text-xl font-normal leading-none">Readme.md</p>
                      <p className="hyphens-auto text-sm font-light text-light-text">A short description of Ezui</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="max-w-[27em] pt-4 text-base font-light leading-7">
                  Ezui is a simple, composable and reusable component library.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="hidden flex-col items-start gap-3 [@media(min-width:1200px)]:flex">
              <Tabs defaultValue="metal">
                <TabsList>
                  <TabsTrigger className="text-base" value="metal">
                    Metal
                  </TabsTrigger>
                  <TabsTrigger className="text-base" value="rock">
                    Rock
                  </TabsTrigger>
                  <TabsTrigger className="text-base" value="punk">
                    Punk
                  </TabsTrigger>
                </TabsList>
              </Tabs>
              <MakeToastBtn />
            </div>
          </div>
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
