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
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";

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

import { RadioGroup, RadioGroupItem } from "@/components/ui/RadioGroup";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select";
import { Separator } from "@/components/ui/Separator";
import { Switch } from "@/components/ui/Switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { Textarea } from "@/components/ui/Textarea";
import { ToastAction, useToast } from "@/components/ui/Toast";
import { Search } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

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

export default Forms;
