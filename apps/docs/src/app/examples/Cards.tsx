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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select";
import { Separator } from "@/components/ui/Separator";
import { Switch } from "@/components/ui/Switch";
import { Textarea } from "@/components/ui/Textarea";
import { cn } from "@/lib/utils";
import { Apple, AtSign, Bell, BellOff, Coins, CreditCard, Github, Search } from "lucide-react";

const Cards = () => {
  const dummyRoles = [
    { role: "Viewer", access: "Can view and comment." },
    { role: "Developer", access: "Can view, comment and edit." },
    { role: "Billing", access: "Can view, comment and manage billing." },
    { role: "Owner", access: "Admin level access to all resources." },
  ];

  return (
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
                className="grid cursor-pointer place-items-center gap-2 rounded border p-4 text-sm focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background hover:bg-accent/50 [&:has([data-state=checked])]:border-border [&:has([data-state=checked])]:bg-accent/50"
                htmlFor="card-credit-card"
              >
                <RadioGroupItem className="sr-only" id="card-credit-card" value="card" />
                <CreditCard className="h-4 w-4" />
                Card
              </Label>
              <Label
                className="grid cursor-pointer place-items-center gap-2 rounded border p-4 text-sm focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background hover:bg-accent/50 [&:has([data-state=checked])]:border-border [&:has([data-state=checked])]:bg-accent/50"
                htmlFor="card-cash"
              >
                <RadioGroupItem className="sr-only" id="card-cash" value="cash" />
                <Coins className="h-4 w-4" />
                Cash
              </Label>
              <Label
                className="grid cursor-pointer place-items-center gap-2 rounded border p-4 text-sm focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background hover:bg-accent/50 [&:has([data-state=checked])]:border-border [&:has([data-state=checked])]:bg-accent/50"
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
              <Button className="w-max shrink-0 text-sm font-medium" variants={{ type: "secondary", size: "sm" }}>
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
            <CardDescription>Reusable and composable components made with Radix and TailwindCSS</CardDescription>
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
  );
};

export default Cards;
