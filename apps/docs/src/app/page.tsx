"use client";

import { allCountries } from "@/components/demo/demoData";
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
import { Checkbox } from "@/components/ui/Checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useForm,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/Menubar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/RadioGroup";
import { ScrollArea, ScrollBar } from "@/components/ui/ScrollArea";
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
import { ToastAction, useToast } from "@/components/ui/Toast";
import { cn } from "@/lib/utils";
import {
  Apple,
  AtSign,
  Bell,
  BellOff,
  Coins,
  CreditCard,
  DollarSign,
  Download,
  Github,
  Globe,
  Grid,
  Library,
  ListMusic,
  Mic,
  Music2,
  PlayCircle,
  Podcast,
  Radio,
  Search,
  User2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { z } from "zod";

const DashBoard = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full items-center justify-between px-4 py-2">
        <div className="flex items-center gap-4 text-sm">
          <Select defaultValue="sir-meowsers">
            <SelectTrigger>
              <SelectValue />
              <SelectContent className="min-w-max text-sm">
                <SelectGroup>
                  <SelectLabel className="text-xs">Personal</SelectLabel>
                  <SelectItem value="sir-meowsers">Sir meowsers</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel className="text-xs">Teams</SelectLabel>
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
    </div>
  );
};

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

const ProfileFormSchema = z.object({
  username: z.string(),
  //This is me being lazy, for real select options enums are preferred. Refer to forms docs to see how to do that
  email: z.string(),
  bio: z.string(),
});

const formTabDesc = {
  profile: "This is how others will see you on the site.",
  account: "Update your account settings. Set your preferred language and timezone.",
  appearance: "Customize the appearance of the app. Automatically switch between day and night themes.",
  notifications: "Configure how you receive notifications.",
};

const AccountFormSchema = z.object({
  name: z.string(),
  //This is me being lazy, for real select options enums are preferred. Refer to forms docs to see how to do that
  country: z.object({
    icon: z.string(),
    name: z.string(),
    abbr: z.string(),
    code: z.string(),
  }),
});

const AppearanceFormSchema = z.object({
  //This is me being lazy, for real select options enums are preferred. Refer to forms docs to see how to do that
  font: z.string(),
  //This is me being lazy, for real select options enums are preferred. Refer to forms docs to see how to do that
  theme: z.string(),
});

const NotificationsFormSchema = z.object({
  notifyAbout: z.string(),
  //Note: z.boolean() means both true and false are valid
  //For validating booleans use .refine as shown in form docs
  communicationEmails: z.boolean(),
  marketingEmails: z.boolean(),
  socialEmails: z.boolean(),
  securityEmails: z.boolean(),
  diffSettingsOnMobile: z.boolean(),
  diffSettingsOnWifi: z.boolean(),
});

const Forms = () => {
  const { toast } = useToast();

  const profileForm = useForm({ schema: ProfileFormSchema });
  const accountForm = useForm({ schema: AccountFormSchema });
  const appearanceForm = useForm({
    schema: AppearanceFormSchema,
  });
  const notificationsForm = useForm({
    schema: NotificationsFormSchema,
    defaultValues: {
      communicationEmails: false,
      marketingEmails: false,
      socialEmails: false,
      securityEmails: false,
      diffSettingsOnMobile: false,
      diffSettingsOnWifi: false,
    },
  });

  const [formTabVal, setFormTabVal] = useState("profile");

  return (
    <div className="flex flex-col p-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
        <p className="text-light-text">
          Manage your account settings and set e-mail preferences.Manage your account settings and set e-mail
          preferences.
        </p>
      </div>
      <Separator className="my-6" />
      <Tabs
        className="items flex flex-col items-start gap-4 lg:flex-row"
        value={formTabVal}
        onValueChange={setFormTabVal}
        orientation="vertical"
      >
        <TabsList className="items-start border-none bg-transparent lg:w-1/5 lg:flex-col">
          {Object.keys(formTabDesc).map((name) => (
            <TabsTrigger className="w-full justify-start text-sm font-medium capitalize hover:underline" value={name}>
              {name}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="flex-1 px-4 lg:max-w-2xl">
          <h3 className="text-lg font-medium capitalize">{formTabVal}</h3>
          <p className="text-sm text-light-text">
            {formTabDesc[formTabVal as keyof typeof formTabDesc] ?? "A description"}
          </p>
          <Separator className="my-6" />
          <TabsContent tabIndex={-1} value="profile">
            <Form
              className="space-y-8"
              form={profileForm}
              onSubmit={(data) => {
                toast({
                  title: "Successfully updated profile",
                  description: `Updated your profile, ${data.username}`,
                  action: <ToastAction altText="Undo profile changes">Undo</ToastAction>,
                });
              }}
            >
              <FormField
                control={profileForm.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="text-sm">
                    <FormLabel className="font-medium leading-none">Username</FormLabel>
                    <FormControl>
                      <Input variants={{ size: "sm" }} placeholder="A cool username" {...field} />
                    </FormControl>
                    <div>
                      <FormDescription className="text-[0.8rem]">This is your public display name.</FormDescription>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={profileForm.control}
                name="email"
                render={({ field: { value, onChange, ...field } }) => (
                  <FormItem className="text-sm">
                    <FormLabel className="font-medium leading-none">Email</FormLabel>
                    <Select {...field} value={value} onValueChange={onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a verified email to display" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="min-w-max text-sm">
                        <SelectItem value="forms-item-1">m@example.com</SelectItem>
                        <SelectItem value="forms-item-2">t@example.com</SelectItem>
                        <SelectItem value="forms-item-3">p@example.com</SelectItem>
                      </SelectContent>
                    </Select>
                    <div>
                      <FormDescription className="text-[0.8rem]">
                        You can manage verified email addresses in your email settings.
                      </FormDescription>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={profileForm.control}
                name="bio"
                render={({ field }) => (
                  <FormItem className="text-sm">
                    <FormLabel className="font-medium leading-none">Bio</FormLabel>
                    <FormControl>
                      <Textarea
                        className="w-3/4"
                        variants={{ size: "sm" }}
                        placeholder="A vivid description about yourself"
                        {...field}
                      />
                    </FormControl>
                    <div>
                      <FormDescription className="text-[0.8rem]">Describe yourself to others</FormDescription>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              <Button variants={{ size: "sm" }} type="submit">
                Update Profile
              </Button>
            </Form>
          </TabsContent>
          <TabsContent tabIndex={-1} className="flex w-full flex-col" value="account">
            <Form
              className="space-y-8"
              form={accountForm}
              onSubmit={(data) => {
                toast({
                  title: "Successfully updated profile",
                  description: `Updated your account, ${data.name}`,
                  action: <ToastAction altText="Undo account changes">Undo</ToastAction>,
                });
              }}
            >
              <FormField
                control={accountForm.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="text-sm">
                    <FormLabel className="font-medium leading-none">Name</FormLabel>
                    <FormControl>
                      <Input variants={{ size: "sm" }} placeholder="Your name" {...field} />
                    </FormControl>
                    <div>
                      <FormDescription className="text-[0.8rem]">
                        This is the name that will be displayed on your profile and in emails.
                      </FormDescription>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={accountForm.control}
                name="country"
                render={({ field: { value, onChange, ...field } }) => (
                  <FormItem className="text-sm">
                    <FormLabel className="font-medium leading-none">Country</FormLabel>
                    <Autocomplete {...field} value={value} onValueChange={onChange} options={allCountries} label="name">
                      {/* Form control should wrap the element which works with label i.e. is input, button, etc. */}
                      <FormControl>
                        <AutocompleteTrigger>
                          <AutocompleteValue placeholder="Select a country" />
                        </AutocompleteTrigger>
                      </FormControl>
                      <AutocompleteContent
                        className="text-sm"
                        input={
                          <AutocompleteInput>
                            <Search className="mr-2 inline h-4 w-4 shrink-0 opacity-50" />
                          </AutocompleteInput>
                        }
                      >
                        {allCountries.map((country) => (
                          <AutocompleteItem value={country} key={country.abbr}>
                            {country.name}
                          </AutocompleteItem>
                        ))}
                      </AutocompleteContent>
                    </Autocomplete>
                    <div>
                      <FormDescription className="text-[0.8rem]">
                        You can manage verified email addresses in your email settings.
                      </FormDescription>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              <Button type="submit" variants={{ size: "sm" }}>
                Update account
              </Button>
            </Form>
          </TabsContent>
          <TabsContent tabIndex={-1} className="flex w-full flex-col" value="appearance">
            <Form
              className="space-y-8"
              form={appearanceForm}
              onSubmit={(data) => {
                toast({
                  title: "Successfully updated preferences",
                  description: (
                    <p className="flex flex-col rounded border border-border bg-accent/25 px-2 py-1">
                      {`
                                {
                                  font: ${data.font},
                                  theme: ${data.theme}
                                }`}
                    </p>
                  ),
                });
              }}
            >
              <FormField
                control={appearanceForm.control}
                name="font"
                render={({ field: { value, onChange, ...field } }) => (
                  <FormItem className="text-sm">
                    <FormLabel className="font-medium leading-none">Font</FormLabel>
                    <Select {...field} value={value} onValueChange={onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a verified email to display" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="min-w-max text-sm">
                        <SelectItem value="Inter">Inter</SelectItem>
                        <SelectItem value="Montserrat">Montserrat</SelectItem>
                        <SelectItem value="Satoshi">Satoshi</SelectItem>
                      </SelectContent>
                    </Select>
                    <div>
                      <FormDescription className="text-[0.8rem]">
                        Set the font you want to use in the dashboard.
                      </FormDescription>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={appearanceForm.control}
                name="theme"
                render={({ field: { onChange, ...field } }) => (
                  <FormItem className="text-sm">
                    <div>
                      <FormLabel className="font-medium leading-none">Theme</FormLabel>
                      <FormDescription className="text-[0.8rem]">Select the theme for the dashboard.</FormDescription>
                    </div>
                    <FormControl>
                      <RadioGroup className="grid grid-cols-2 gap-6" {...field} onValueChange={onChange}>
                        <Label className="flex flex-col items-center gap-4">
                          <RadioGroupItem className="peer sr-only" value="light" />
                          <div className="w-full space-y-2 rounded-md border-4 border-transparent bg-white p-4 shadow peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-4 peer-focus-visible:ring-offset-background peer-data-[state=checked]:border-border">
                            <div className="flex w-full items-center gap-2 rounded border border-[#e4e7e7] bg-white p-2">
                              <div className="h-8 w-8 shrink-0 rounded-full bg-[#ececee]" />
                              <div className="flex w-full flex-col gap-1">
                                <div className="h-2 w-full rounded-md bg-[#ececee]" />
                                <div className="h-2 w-3/4 rounded-md bg-[#ececee]" />
                              </div>
                            </div>
                            <div className="flex w-full items-center gap-2 rounded border border-[#e4e7e7] bg-white p-2">
                              <div className="flex w-full flex-col gap-2">
                                <div className="h-3 w-full rounded-md bg-[#ececee]" />
                                <div className="h-3 w-3/4 rounded-md bg-[#ececee]" />
                              </div>
                            </div>
                            <div className="flex w-full items-center gap-2 rounded border border-[#e4e7e7] bg-white p-2">
                              <div className="flex w-full flex-col gap-2">
                                <div className="h-2 w-full rounded-md bg-[#ececee]" />
                                <div className="h-2 w-3/4 rounded-md bg-[#ececee]" />
                              </div>
                            </div>
                          </div>
                          Light
                        </Label>
                        <Label className="flex flex-col items-center gap-4">
                          <RadioGroupItem className="peer sr-only" value="dark" />
                          <div className="w-full space-y-2 rounded-md border-4 border-transparent bg-[#0a0b0b] p-4 shadow peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-4 peer-focus-visible:ring-offset-background peer-data-[state=checked]:border-border">
                            <div className="flex w-full items-center gap-2 rounded border border-[#202222] bg-[#0f1010] p-2">
                              <div className="h-8 w-8 shrink-0 rounded-full bg-[#27272a]" />
                              <div className="flex w-full flex-col gap-1">
                                <div className="h-2 w-full rounded-md bg-[#27272a]" />
                                <div className="h-2 w-3/4 rounded-md bg-[#27272a]" />
                              </div>
                            </div>
                            <div className="flex w-full items-center gap-2 rounded border border-[#202222] bg-[#0f1010] p-2">
                              <div className="flex w-full flex-col gap-2">
                                <div className="h-3 w-full rounded-md bg-[#27272a]" />
                                <div className="h-3 w-3/4 rounded-md bg-[#27272a]" />
                              </div>
                            </div>
                            <div className="flex w-full items-center gap-2 rounded border border-[#202222] bg-[#0f1010] p-2">
                              <div className="flex w-full flex-col gap-2">
                                <div className="h-2 w-full rounded-md bg-[#27272a]" />
                                <div className="h-2 w-3/4 rounded-md bg-[#27272a]" />
                              </div>
                            </div>
                          </div>
                          Dark
                        </Label>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button variants={{ size: "sm" }}>Update Preferences</Button>
            </Form>
          </TabsContent>
          <TabsContent tabIndex={-1} className="flex w-full flex-col" value="notifications">
            <Form
              className="space-y-8"
              form={notificationsForm}
              onSubmit={() => {
                toast({
                  title: "Successfully made changes",
                  description: "Your new notification settings have been applied",
                  action: <ToastAction altText="Undo profile changes">Undo</ToastAction>,
                });
              }}
            >
              <FormField
                control={notificationsForm.control}
                name="notifyAbout"
                render={({ field: { onChange, ...field } }) => (
                  <FormItem className="text-sm">
                    <FormLabel className="font-medium leading-none">Notify me about...</FormLabel>
                    <FormControl>
                      <RadioGroup className="flex flex-col gap-2" {...field} onValueChange={onChange}>
                        <div className="flex items-center gap-3">
                          <RadioGroupItem value="allNew" id="notifications-all-new" />
                          <Label htmlFor="notifications-all-new">All new messages</Label>
                        </div>
                        <div className="flex items-center gap-3">
                          <RadioGroupItem value="dmsOnly" id="notifications-dms-only" />
                          <Label htmlFor="notifications-dms-only">Direct messages and mentions</Label>
                        </div>
                        <div className="flex items-center gap-3">
                          <RadioGroupItem value="nothing" id="notifications-nothing" />
                          <Label htmlFor="notifications-nothing">Nothing</Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid gap-4">
                <h3 className="text-lg font-medium">Email Notifications</h3>
                <div className="grid gap-4">
                  <FormField
                    control={notificationsForm.control}
                    name="communicationEmails"
                    render={({ field: { value, onChange, ...field } }) => (
                      <FormItem className="flex items-center justify-between gap-4 rounded-lg border p-4">
                        <div className="space-y-1">
                          <FormLabel className="text-base font-medium">Communication emails</FormLabel>
                          <p className="text-[0.8rem] text-light-text">Receive emails about your account activity.</p>
                        </div>
                        <FormControl>
                          <Switch {...field} checked={value} onCheckedChange={onChange} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={notificationsForm.control}
                    name="marketingEmails"
                    render={({ field: { value, onChange, ...field } }) => (
                      <FormItem className="flex items-center justify-between gap-4 rounded-lg border p-4">
                        <div className="space-y-1">
                          <FormLabel className="text-base font-medium">Marketing emails</FormLabel>
                          <p className="text-[0.8rem] text-light-text">
                            Receive emails about new products, features, and more.
                          </p>
                        </div>
                        <FormControl>
                          <Switch {...field} checked={value} onCheckedChange={onChange} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={notificationsForm.control}
                    name="socialEmails"
                    render={({ field: { value, onChange, ...field } }) => (
                      <FormItem className="flex items-center justify-between gap-4 rounded-lg border p-4">
                        <div className="space-y-1">
                          <FormLabel className="text-base font-medium">Social emails</FormLabel>
                          <p className="text-[0.8rem] text-light-text">
                            Receive emails for friend requests, follows, and more.
                          </p>
                        </div>
                        <FormControl>
                          <Switch {...field} checked={value} onCheckedChange={onChange} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={notificationsForm.control}
                    name="securityEmails"
                    render={({ field: { value, onChange, ...field } }) => (
                      <FormItem className="flex items-center justify-between gap-4 rounded-lg border p-4">
                        <div className="space-y-1">
                          <FormLabel className="text-base font-medium">Security emails</FormLabel>
                          <p className="text-[0.8rem] text-light-text">
                            Receive emails about your account activity and security.
                          </p>
                        </div>
                        <FormControl>
                          <Switch {...field} checked={value} onCheckedChange={onChange} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={notificationsForm.control}
                  name="diffSettingsOnMobile"
                  render={({ field: { value, onChange, ...field } }) => (
                    <FormItem className="flex items-center gap-4">
                      <FormControl>
                        <Checkbox
                          {...field}
                          checked={value}
                          onCheckedChange={(val) => {
                            if (typeof val !== "boolean") return;
                            onChange(val);
                          }}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm font-medium leading-none">
                          Use different settings for my mobile devices
                        </FormLabel>
                        <p className="text-[0.8rem] text-light-text">
                          You can manage your mobile notifications in the mobile settings page.
                        </p>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={notificationsForm.control}
                  name="diffSettingsOnWifi"
                  render={({ field: { value, onChange, ...field } }) => (
                    <FormItem className="flex items-center gap-4">
                      <FormControl>
                        <Checkbox
                          {...field}
                          checked={value}
                          onCheckedChange={(val) => {
                            if (typeof val !== "boolean") return;
                            onChange(val);
                          }}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm font-medium leading-none">
                          Use different settings when connected to Wi-Fi
                        </FormLabel>
                        <p className="text-[0.8rem] text-light-text">
                          You can manage your wifi notifications in the wifi settings page.
                        </p>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <Button variants={{ size: "sm" }}>Update notifications</Button>
            </Form>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

const MusicArtwork = ({
  song,
  className,
  aspectRatio = "portrait",
  ...rest
}: React.HTMLAttributes<HTMLDivElement> & {
  song: {
    name: string;
    artist: string;
    image: string;
  };
  aspectRatio?: "portrait" | "3/4";
}) => {
  return (
    <div {...rest} className={cn("group max-w-[250px] shrink-0 cursor-pointer space-y-3", className)} key={song.name}>
      <div className="overflow-hidden rounded-md">
        {/* Todo add a context menu here */}
        <Image
          className={cn(
            "h-auto w-auto scale-100 object-cover transition ease-in hover:scale-105",
            aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
          )}
          width={364}
          height={366}
          src={song.image}
          alt={`Cover image of the song ${song.name} by ${song.artist}`}
        />
      </div>
      <div className="space-y-1">
        <h3 className="text-sm font-medium leading-none">{song.name}</h3>
        <p className="text-xs text-light-text">{song.artist}</p>
      </div>
    </div>
  );
};

export default function Home() {
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
              <DashBoard />
            </TabsContent>
            <TabsContent tabIndex={-1} value="cards">
              <Cards />
            </TabsContent>
            <TabsContent tabIndex={-1} value="forms">
              <Forms />
            </TabsContent>
            <TabsContent tabIndex={-1} className="mt-0" value="music">
              <Menubar className="rounded-bl-none rounded-br-none">
                <MenubarMenu>
                  <MenubarTrigger>Music</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>About Music</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                      Preferences <MenubarShortcut className="ml-auto"></MenubarShortcut>⌘
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                      Hide Music... <MenubarShortcut className="ml-auto">⌘H</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                      Hide Others... <MenubarShortcut className="ml-auto">⇧⌘H</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                      Quit Music... <MenubarShortcut className="ml-auto">⌘L</MenubarShortcut>
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>File</MenubarTrigger>
                  <MenubarContent>
                    <MenubarSub>
                      <MenubarSubTrigger>New</MenubarSubTrigger>
                      <MenubarSubContent>
                        <MenubarItem>
                          Playlist <MenubarShortcut className="ml-auto">⌘N</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem disabled>
                          Playlist from selection <MenubarShortcut className="ml-auto">⇧⌘N</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem>
                          Smart Playlist <MenubarShortcut className="ml-auto">⌥⌘N</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem>Playlist Folder</MenubarItem>
                        <MenubarItem disabled>Smort Playlist</MenubarItem>
                      </MenubarSubContent>
                    </MenubarSub>
                    <MenubarItem>
                      Open Stream URL <MenubarShortcut className="ml-auto">⌘U</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                      Close Window <MenubarShortcut className="ml-auto">⌘W</MenubarShortcut>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarSub>
                      <MenubarSubTrigger>Library</MenubarSubTrigger>
                      <MenubarSubContent>
                        <MenubarItem>Update Cloud Library</MenubarItem>
                        <MenubarItem>Update Genius</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Organize Library</MenubarItem>
                        <MenubarItem>Export Library</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Import Playlist</MenubarItem>
                        <MenubarItem disabled>Import Playlist</MenubarItem>
                        <MenubarItem>Show Duplicate Items</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Get Album Artwork</MenubarItem>
                        <MenubarItem disabled>Get Track Names</MenubarItem>
                      </MenubarSubContent>
                    </MenubarSub>
                    <MenubarItem>
                      Import <MenubarShortcut className="ml-auto">⌘O</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem disabled>Burn Playlist to Disc</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                      Show in Finder <MenubarShortcut className="ml-auto">⇧⌘R</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>Convert</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Page Setup</MenubarItem>
                    <MenubarItem disabled>Print</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>Edit</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem disabled>
                      Undo <MenubarShortcut className="ml-auto">⌘Z</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem disabled>
                      Redo <MenubarShortcut className="ml-auto">⇧⌘Z</MenubarShortcut>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem disabled>
                      Cut <MenubarShortcut className="ml-auto">⌘X</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem disabled>
                      Copy <MenubarShortcut className="ml-auto">⌘C</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem disabled>
                      Paste <MenubarShortcut className="ml-auto">⌘V</MenubarShortcut>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                      Select All <MenubarShortcut className="ml-auto">⌘A</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem disabled>
                      Dselect All <MenubarShortcut className="ml-auto">⇧⌘Z</MenubarShortcut>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                      Smart Dictation{" "}
                      <MenubarShortcut className="ml-auto">
                        <Mic className="h-4 w-4" />
                      </MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                      Emoji & Symbols{" "}
                      <MenubarShortcut className="ml-auto">
                        <Globe className="h-4 w-4" />
                      </MenubarShortcut>
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>View</MenubarTrigger>
                  <MenubarContent>
                    <MenubarCheckboxItem>Show Playing Next</MenubarCheckboxItem>
                    <MenubarCheckboxItem checked>Show Lyrics</MenubarCheckboxItem>
                    <MenubarSeparator />
                    <MenubarCheckboxItem disabled checked>
                      Show Lyrics
                    </MenubarCheckboxItem>
                    <MenubarSeparator />
                    <MenubarCheckboxItem>Hide Sidebar</MenubarCheckboxItem>
                    <MenubarCheckboxItem disabled>Enter Full Screen</MenubarCheckboxItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>Account</MenubarTrigger>
                  <MenubarContent>
                    <MenubarCheckboxItem>Switch Account</MenubarCheckboxItem>
                    <MenubarSeparator />
                    <MenubarRadioGroup value="meowsalott">
                      <MenubarRadioItem value="meowsers">Sir Meowsers</MenubarRadioItem>
                      <MenubarRadioItem value="meowsalott">Meowsalott</MenubarRadioItem>
                      <MenubarRadioItem value="elcatto">El Catto</MenubarRadioItem>
                    </MenubarRadioGroup>
                    <MenubarSeparator />
                    <MenubarCheckboxItem>Manage Family</MenubarCheckboxItem>
                    <MenubarSeparator />
                    <MenubarCheckboxItem>Add Account</MenubarCheckboxItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
              <div className="grid lg:grid-cols-5">
                <div className="hidden lg:block">
                  <div className="space-y-8 px-4 py-6 pb-20">
                    {[
                      {
                        title: "Discover",
                        scrollable: false,
                        items: [
                          { text: "Listen Now", icon: PlayCircle, active: true },
                          { text: "Browse", icon: Grid },
                          { text: "Radio", icon: Radio },
                        ],
                      },
                      {
                        title: "Library",
                        scrollable: false,
                        items: [
                          { text: "Playlists", icon: ListMusic, active: false },
                          { text: "Songs", icon: Music2 },
                          { text: "Made for You", icon: User2 },
                          { text: "Artists", icon: Radio },
                          { text: "Albums", icon: Library },
                        ],
                      },
                      {
                        title: "Playlists",
                        scrollable: true,
                        items: [
                          { text: "Metal and Rock", icon: PlayCircle, active: false },
                          { text: "Pop Punk", icon: ListMusic },
                          { text: "Random", icon: ListMusic },
                          { text: "Recently Added", icon: ListMusic },
                          { text: "Top Songs", icon: ListMusic },
                          { text: "Top Artists", icon: ListMusic },
                          { text: "Top Artists", icon: ListMusic },
                          { text: "Top Artists", icon: ListMusic },
                          { text: "Top Artists", icon: ListMusic },
                          { text: "Top Artists", icon: ListMusic },
                          { text: "Top Artists", icon: ListMusic },
                          { text: "Top Artists", icon: ListMusic },
                        ],
                      },
                    ].map((group) => (
                      <div className={"space-y-2 px-2"} key={group.title}>
                        <h3 className="px-3 text-lg font-semibold tracking-tight">{group.title}</h3>
                        <ScrollArea className={cn("space-y-1", group.scrollable && "h-[300px]")}>
                          {group.items.map((item) => (
                            <button
                              className={cn(
                                "inline-flex w-full items-center rounded-md border border-transparent px-3 py-2 text-sm hover:bg-accent/50 focus-visible:border-ring focus-visible:outline-0",
                                item.active && "border-border bg-accent/50"
                              )}
                            >
                              <item.icon className="mr-2 h-4 w-4" /> {item.text}
                            </button>
                          ))}
                        </ScrollArea>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-span-4 h-full">
                  <div className="h-full px-4 py-6 lg:px-8">
                    <Tabs defaultValue="music">
                      <TabsList>
                        <TabsTrigger value="music">Music</TabsTrigger>
                        <TabsTrigger value="podcasts">Podacsts</TabsTrigger>
                        <TabsTrigger value="live" disabled>
                          Live
                        </TabsTrigger>
                      </TabsList>
                      <div>
                        <TabsContent value="music">
                          <div className="space-y-6">
                            <div className="mt-6 leading-none">
                              <h2 className="text-2xl font-bold tracking-tight">Listen Now</h2>
                              <p className="text-sm text-light-text">Top picks for you. Updated daily.</p>
                            </div>
                            <Separator className="my-4" />
                            <ScrollArea type="hover">
                              <div className="flex w-full items-center gap-4 pb-4">
                                {[
                                  { image: "/cat.jpg", name: "Aqua Regia", artist: "Meowsalott" },
                                  { image: "/cat.jpg", name: "Aqua Regia", artist: "Meowsalott" },
                                  { image: "/cat.jpg", name: "Aqua Regia", artist: "Meowsalott" },
                                  { image: "/cat.jpg", name: "Aqua Regia", artist: "Meowsalott" },
                                  { image: "/cat.jpg", name: "Aqua Regia", artist: "Meowsalott" },
                                  { image: "/cat.jpg", name: "Aqua Regia", artist: "Meowsalott" },
                                  { image: "/cat.jpg", name: "Aqua Regia", artist: "Meowsalott" },
                                  { image: "/cat.jpg", name: "Aqua Regia", artist: "Meowsalott" },
                                  { image: "/cat.jpg", name: "Aqua Regia", artist: "Meowsalott" },
                                ].map((song) => (
                                  <MusicArtwork song={song} />
                                ))}
                                <ScrollBar className="h-2 hover:h-2.5" orientation="horizontal" />
                              </div>
                            </ScrollArea>
                            <div className="space-y-6">
                              <div className="mt-6 leading-none">
                                <h2 className="text-2xl font-bold tracking-tight">Made for You</h2>
                                <p className="text-sm text-light-text">Your personal playlists. Updated daily.</p>
                              </div>
                            </div>
                            <Separator className="my-4" />
                            <ScrollArea type="hover">
                              <div className="flex w-full items-center gap-4 pb-4">
                                {[
                                  { image: "/cat.jpg", name: "Aqua Regia", artist: "Meowsalott" },
                                  { image: "/cat.jpg", name: "Aqua Regia", artist: "Meowsalott" },
                                  { image: "/cat.jpg", name: "Aqua Regia", artist: "Meowsalott" },
                                  { image: "/cat.jpg", name: "Aqua Regia", artist: "Meowsalott" },
                                  { image: "/cat.jpg", name: "Aqua Regia", artist: "Meowsalott" },
                                  { image: "/cat.jpg", name: "Aqua Regia", artist: "Meowsalott" },
                                  { image: "/cat.jpg", name: "Aqua Regia", artist: "Meowsalott" },
                                  { image: "/cat.jpg", name: "Aqua Regia", artist: "Meowsalott" },
                                  { image: "/cat.jpg", name: "Aqua Regia", artist: "Meowsalott" },
                                ].map((song) => (
                                  <MusicArtwork className="max-w-[150px]" song={song} aspectRatio="3/4" />
                                ))}
                                <ScrollBar className="h-2 hover:h-2.5" orientation="horizontal" />
                              </div>
                            </ScrollArea>
                          </div>
                        </TabsContent>
                        <TabsContent value="podcasts">
                          <div className="space-y-6">
                            <div className="mt-6 leading-none">
                              <h2 className="text-2xl font-bold tracking-tight">New Episodes</h2>
                              <p className="text-sm text-light-text">Your favorite podcasts. Updated daily.</p>
                            </div>
                            <Separator className="my-4" />
                            <div className="place-item-center grid h-[450px] w-full place-content-center rounded border border-dashed border-separator">
                              <div className="flex max-w-[420px] flex-col items-center">
                                <Podcast className="h-10 w-10 text-light-text" />
                                <h3 className="mt-4 text-lg font-semibold leading-none">No episodes added</h3>
                                <p className="mb-4 mt-2 text-light-text">
                                  You have not added any podcasts. Add one below.
                                </p>
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <Button variants={{ size: "sm" }}>Add Podcast</Button>
                                  </DialogTrigger>
                                  <DialogContent>
                                    <DialogHeader>
                                      <DialogTitle>Add Podcast</DialogTitle>
                                      <DialogDescription>
                                        Copy and paste the podcast feed URL to import.
                                      </DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-2 py-4 text-sm">
                                      <Label>Podcast URL</Label>
                                      <Input
                                        className=""
                                        variants={{ size: "sm" }}
                                        placeholder="https://example.com/feed.xml"
                                      />
                                    </div>
                                    <DialogFooter>
                                      <Button variants={{ size: "sm" }}>Import Podcast</Button>
                                    </DialogFooter>
                                  </DialogContent>
                                </Dialog>
                              </div>
                            </div>
                          </div>
                        </TabsContent>
                      </div>
                    </Tabs>
                  </div>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
