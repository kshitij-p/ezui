import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteTrigger,
  AutocompleteValue,
} from "@/components/ui/Autocomplete";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/RadioGroup";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { Separator } from "@/components/ui/Separator";
import { Switch } from "@/components/ui/Switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { Textarea } from "@/components/ui/Textarea";
import { cn } from "@/lib/utils";
import { Apple, AtSign, Bell, BellOff, Coins, CreditCard, DollarSign, Download, Github, Search } from "lucide-react";
import Link from "next/link";

const DashBoard = () => {
  return (
    <>
      <div className="flex w-full items-center justify-between px-4 py-2">
        <div className="flex items-center gap-4 text-sm">
          <Select defaultValue="sir-meowsers">
            <SelectTrigger>
              <SelectValue />
              <SelectContent className="min-w-max">
                <SelectGroup>
                  <SelectLabel>Personal</SelectLabel>
                  <SelectItem value="sir-meowsers">Sir meowsers</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>Teams</SelectLabel>
                  <SelectItem value="the-squad">The squad</SelectItem>
                  <SelectItem value="serious-company">A serious company</SelectItem>
                  <SelectItem value="another-company">Another company</SelectItem>
                </SelectGroup>
              </SelectContent>
            </SelectTrigger>
          </Select>
          <div className="flex-items-center flex gap-4">
            <p>Overview</p>
            <p>Customers</p>
            <p>Products</p>
            <p>Settings</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <Input
              variants={{ size: "sm" }}
              className="max-w-full text-sm md:w-[100px] lg:w-[300px]"
              placeholder="Search..."
            />
          </div>
          <Avatar>
            <AvatarImage
              src="https://cdn.discordapp.com/avatars/259725020534669313/b3378ac773b78f64ee4d2343d411f908.webp"
              alt="@smolcheeld"
            />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="space-y-4 p-6 xl:p-8">
        <div className="flex items-center">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <Button className="ml-auto text-sm" variants={{ type: "secondary", size: "sm" }}>
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
        </div>
        <Tabs defaultValue="item-1">
          <TabsList>
            <TabsTrigger value="item-1">Overview</TabsTrigger>

            <TabsTrigger disabled value="item-2">
              Customers
            </TabsTrigger>
            <TabsTrigger disabled value="item-3">
              Products
            </TabsTrigger>
            <TabsTrigger disabled value="item-4">
              Settings
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            { title: "Total Revenue", value: "$45,231.89", subtext: "+20.1% from last month" },
            { title: "Total Revenue", value: "$45,231.89", subtext: "+20.1% from last month" },
            { title: "Total Revenue", value: "$45,231.89", subtext: "+20.1% from last month" },
            { title: "Total Revenue", value: "$45,231.89", subtext: "+20.1% from last month" },
          ].map((card) => (
            <Card className="rounded-xl">
              <CardHeader className="flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm">{card.title}</CardTitle>
                <DollarSign className="h-4 w-4 text-light-text" />
              </CardHeader>
              <CardContent className="flex flex-col">
                <b className="bold text-2xl">{card.value}</b>
                <p className="text-xs text-light-text">{card.subtext}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-7">
          <div className="col-span-4">A chart here</div>
          <div className="col-span-3">
            <Card>
              <CardHeader>
                <CardTitle>Recent Sales</CardTitle>
                <CardDescription>You made 265 sales this month</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-col gap-6">
                  {[
                    { name: "Olivia Martin", email: "olivia.martin@gmail.com", sales: "1999" },
                    { name: "Sir Meowsers", email: "olivia.martin@gmail.com", sales: "1999" },
                    { name: "Meowsalott", email: "olivia.martin@gmail.com", sales: "1999" },
                    { name: "Orang Cat", email: "olivia.martin@gmail.com", sales: "1999" },
                    { name: "El Catto", email: "olivia.martin@gmail.com", sales: "1999" },
                  ].map((item) => (
                    <li className="flex items-center gap-2" key={item.name}>
                      <Avatar>
                        <AvatarImage
                          src="https://cdn.discordapp.com/avatars/259725020534669313/b3378ac773b78f64ee4d2343d411f908.webp"
                          alt="@smolcheeld"
                        />
                        <AvatarFallback>SC</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col text-sm">
                        <b className="font-medium leading-none">{item.name}</b>
                        <p className="text-light-text">{item.email}</p>
                      </div>
                      <p className="ml-auto font-semibold">{`+$${item.sales}`}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default function Home() {
  const dummyRoles = [
    { role: "Viewer", access: "Can view and comment." },
    { role: "Developer", access: "Can view, comment and edit." },
    { role: "Billing", access: "Can view, comment and manage billing." },
    { role: "Owner", access: "Admin level access to all resources." },
  ];

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
        <div className="flex w-full flex-col gap-2">
          <Button className="mt-2">Get Started</Button>
          <Button asChild className="mt-2" variants={{ type: "secondary" }}>
            <Link href={"/docs"}>Documentation</Link>
          </Button>
        </div>
      </div>
      <div className="mt-20">
        <Tabs defaultValue="dashboard">
          <TabsList className="max-w-full justify-normal overflow-y-auto">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="cards">Cards</TabsTrigger>
            <TabsTrigger value="tasks">Tasks</TabsTrigger>
            <TabsTrigger value="playground">Playground</TabsTrigger>
            <TabsTrigger value="forms">Forms</TabsTrigger>
            <TabsTrigger value="music">Music</TabsTrigger>
          </TabsList>
          <div className="mt-3 overflow-hidden rounded-xl border shadow">
            <TabsContent tabIndex={-1} className="flex w-full flex-col" value="dashboard">
              <DashBoard />
            </TabsContent>
            <TabsContent tabIndex={-1} value="cards">
              <div className="grid w-full items-start justify-center gap-6 p-8 lg:grid-cols-2 xl:grid-cols-3">
                <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
                  <Card>
                    <CardHeader>
                      <CardTitle>Create an account</CardTitle>
                      <CardDescription>Enter your email below to create your account.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                      <div className="grid grid-cols-2 gap-4">
                        <Button className="rounded-md text-sm" variants={{ type: "secondary" }}>
                          <Github className="mr-2 h-4 w-4" />
                          Github
                        </Button>
                        <Button className="rounded-md text-sm" variants={{ type: "secondary" }}>
                          <Github className="mr-2 h-4 w-4" />
                          Google
                        </Button>
                      </div>
                      <div className="relative">
                        <div className="absolute inset-0 z-[1] flex w-full items-center">
                          <span className="w-full border-t border-separator" />
                        </div>
                        <div className="relative z-[2] flex items-center justify-center">
                          <span className="bg-background text-xs">OR CONTINUE WITH</span>
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="card-email">Email</Label>
                        <Input id="card-email" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="card-password">Password</Label>
                        <Input id="card-password" />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Create account</Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Payment Method</CardTitle>
                      <CardDescription>Add a new payment method to your account.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                      <RadioGroup className="grid grid-cols-3 gap-4">
                        <Label
                          className="focus-within:ring-offset grid cursor-pointer place-items-center gap-2 rounded border p-4 text-sm focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background hover:bg-accent/50 [&:has([data-state=checked])]:border-border [&:has([data-state=checked])]:bg-accent/50"
                          htmlFor="card-credit-card"
                        >
                          <RadioGroupItem className="sr-only" id="card-credit-card" value="card" />
                          <CreditCard className="h-4 w-4" />
                          Card
                        </Label>
                        <Label
                          className="focus-within:ring-offset grid cursor-pointer place-items-center gap-2 rounded border p-4 text-sm focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background hover:bg-accent/50 [&:has([data-state=checked])]:border-border [&:has([data-state=checked])]:bg-accent/50"
                          htmlFor="card-cash"
                        >
                          <RadioGroupItem className="sr-only" id="card-cash" value="cash" />
                          <Coins className="h-4 w-4" />
                          Cash
                        </Label>
                        <Label
                          className="focus-within:ring-offset grid cursor-pointer place-items-center gap-2 rounded border p-4 text-sm focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background hover:bg-accent/50 [&:has([data-state=checked])]:border-border [&:has([data-state=checked])]:bg-accent/50"
                          htmlFor="card-apple"
                        >
                          <RadioGroupItem className="sr-only" id="card-apple" value="apple" />
                          <Apple className="h-4 w-4" />
                          Apple
                        </Label>
                      </RadioGroup>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Create account</Button>
                    </CardFooter>
                  </Card>
                </div>
                <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
                  <Card>
                    <CardHeader>
                      <CardTitle>Team Members</CardTitle>
                      <CardDescription>Invite your team members to collaborate.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-6">
                      {(
                        [
                          { name: "Sofia Davis", email: "m@example.com", role: "Owner" },
                          { name: "Sir Meowsers", email: "s@example.com", role: "Developer" },
                        ] as const
                      ).map((person) => (
                        <div className="flex items-center gap-4">
                          <Avatar>
                            <AvatarImage
                              src="https://cdn.discordapp.com/avatars/259725020534669313/b3378ac773b78f64ee4d2343d411f908.webp"
                              alt="@smolcheeld"
                            />
                            <AvatarFallback>SC</AvatarFallback>
                          </Avatar>
                          <div className="text-sm">
                            <b className="font-medium leading-none">{person.name}</b>
                            <p className="text-light-text">{person.email}</p>
                          </div>
                          <Autocomplete
                            value={{
                              role: person.role,
                              access: dummyRoles.find((item) => item.role === person.role)?.access ?? "",
                            }}
                            options={dummyRoles}
                            label="role"
                          >
                            <AutocompleteTrigger className="ml-auto text-sm">
                              <AutocompleteValue />
                            </AutocompleteTrigger>
                            <AutocompleteContent
                              align="end"
                              className="w-72"
                              input={
                                <AutocompleteInput placeholder="Select a new role...">
                                  <Search className="mr-2 inline h-4 w-4 shrink-0 opacity-50" />
                                </AutocompleteInput>
                              }
                            >
                              {dummyRoles.map((item) => (
                                <AutocompleteItem value={item.role}>
                                  <div className="text-sm">
                                    {item.role}
                                    <p className="text-light-text">{item.access}</p>
                                  </div>
                                </AutocompleteItem>
                              ))}
                            </AutocompleteContent>
                          </Autocomplete>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Share this document</CardTitle>
                      <CardDescription>Anyone with the link can view this document.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2">
                        <Input
                          className="w-full"
                          variants={{ size: "sm" }}
                          readOnly
                          value="http://example.com/link/to/document"
                        />
                        <Button
                          className="w-max shrink-0 text-sm font-medium"
                          variants={{ type: "secondary", size: "sm" }}
                        >
                          Copy Link
                        </Button>
                      </div>
                      <Separator className="my-4" />
                      <div className="grid gap-4">
                        <h4 className="text-sm font-medium">People with access</h4>
                        <div className="flex w-full flex-col items-center gap-4">
                          {[
                            { name: "Sir Meowsers", email: "m@example.com" },
                            { name: "Meowsalott", email: "m@example.com" },
                          ].map((person) => (
                            <div className="flex w-full items-center gap-4">
                              <Avatar>
                                <AvatarImage
                                  src="https://cdn.discordapp.com/avatars/259725020534669313/b3378ac773b78f64ee4d2343d411f908.webp"
                                  alt="@smolcheeld"
                                />
                                <AvatarFallback>SC</AvatarFallback>
                              </Avatar>
                              <div className="text-sm">
                                <p className="font-medium leading-none">{person.name}</p>
                                <p className="text-light-text">{person.email}</p>
                              </div>
                              <Select defaultValue="view">
                                <SelectTrigger className="ml-auto text-sm">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="view">Can view</SelectItem>
                                  <SelectItem value="edit">Can edit</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Notifications</CardTitle>
                      <CardDescription>Choose what you want to be notified about.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-1">
                      {[
                        {
                          title: "Everything",
                          desc: "Email digest, mentions & all activity.",
                          active: false,
                          icon: Bell,
                        },
                        { title: "Available", desc: "Only mentions and comments.", active: true, icon: AtSign },
                        { title: "Ignoring", desc: "Turn off all notifications.", active: false, icon: BellOff },
                      ].map((item) => (
                        <div
                          key={item.title}
                          className={cn(
                            "flex items-center gap-4 rounded-md border border-transparent p-2",
                            item.active && "border-border bg-accent/50"
                          )}
                        >
                          <item.icon className="h-5 w-5" />
                          <div className="grid text-sm">
                            <b className="leading-none">{item.title}</b>
                            <p className="text-light-text">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
                <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
                  <Card>
                    <CardHeader>
                      <CardTitle>Report an issue</CardTitle>
                      <CardDescription>What area are you having problems with?</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="cards-area">Area</Label>
                          <Select defaultValue="billing">
                            <SelectTrigger id="cards-area" className="text-sm">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="text-sm">
                              <SelectItem value="team">Team</SelectItem>
                              <SelectItem value="billing">Billing</SelectItem>
                              <SelectItem value="account">Account</SelectItem>
                              <SelectItem value="deployments">Deployments</SelectItem>
                              <SelectItem value="support">Support</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="cards-sec">Security Level</Label>
                          <Select defaultValue="s-1">
                            <SelectTrigger id="cards-sec" className="text-sm">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="text-sm">
                              <SelectItem value="s-1">Severity 1 (Highest)</SelectItem>
                              <SelectItem value="s-2">Severity 2</SelectItem>
                              <SelectItem value="s-3">Severity 3</SelectItem>
                              <SelectItem value="s-4">Severity 4 (Lowest)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="grid gap-2 text-sm">
                        <Label htmlFor="cards-subject">Subject</Label>
                        <Input variants={{ size: "sm" }} placeholder="I need help with..." />
                      </div>
                      <div className="grid gap-2 text-sm">
                        <Label htmlFor="cards-subject">Subject</Label>
                        <Textarea
                          variants={{ size: "sm" }}
                          placeholder="Please include all your information relevant to your issue."
                        />
                      </div>
                    </CardContent>
                    <CardFooter className="flex items-center justify-between">
                      <Button variants={{ type: "ghost" }}>Cancel</Button>
                      <Button variants={{ type: "primary" }}>Deploy</Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>ezui</CardTitle>
                      <CardDescription>
                        Reusable and composable components made with Radix and TailwindCSS
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex items-center gap-4 text-sm text-light-text">
                      <div className="flex items-center">
                        <span className="mr-1 h-3 w-3 rounded-full bg-cyan-500" />
                        Typescript
                      </div>
                      Updated July 2023
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Cookie Settings</CardTitle>
                      <CardDescription>Manage your cookie settings here.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-6">
                      {[
                        {
                          title: "Strictly Necessary",
                          desc: "These cookies are essential in order to use the website and use its features.",
                          defaultChecked: true,
                        },
                        {
                          title: "Functional Cookies",
                          desc: "These cookies allow the website to provide personalized functionality.",
                        },
                        {
                          title: "Performance Cookies",
                          desc: "These cookies help to improve the performance of the website.",
                        },
                      ].map((item) => (
                        <div className="flex items-center justify-between gap-2" key={item.title}>
                          <Label className="grid gap-1" htmlFor={`cards-${item.title}`}>
                            <h3 className="font-semibold tracking-tight">{item.title}</h3>
                            <p className="text-sm leading-snug text-light-text">{item.desc}</p>
                          </Label>
                          <Switch defaultChecked={item.defaultChecked} id={`cards-${item.title}`} />
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            <TabsContent tabIndex={-1} value="tasks">
              tasks
            </TabsContent>
            <TabsContent tabIndex={-1} value="playground">
              playground
            </TabsContent>
            <TabsContent tabIndex={-1} value="forms">
              forms
            </TabsContent>
            <TabsContent tabIndex={-1} value="music">
              music
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
