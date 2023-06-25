"use client";

import React, { useState } from "react";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, useForm } from "../ui/Form";
import { z } from "zod";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteItem,
  AutocompleteTrigger,
  AutocompleteValue,
} from "../ui/Autocomplete";
import { allCountries } from "./demoData";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/Select";
import { Checkbox } from "../ui/Checkbox";
import { Textarea } from "../ui/Textarea";
import { RadioGroup, RadioGroupItem } from "../ui/RadioGroup";
import { Label } from "../ui/Label";
import { Switch } from "../ui/Switch";

const allHobbies = ["Programming", "Music", "Sleeping", "Looking at cats", "YES"] as const;

const allCatBreeds = ["Ragdoll", "Maine Coon", "Orang", "Eeepy", "YES"] as const;

const allCatNames = ["Orang", "Sir moewsers", "Doug"] as const;

const formSchema = z.object({
  username: z.string({ required_error: "Must be at least 2 characters." }).min(2, {
    message: "Must be at least 2 characters.",
  }),
  age: z
    .number({ invalid_type_error: "You must be atleast 18 years old" })
    .min(18, { message: "You must be atleast 18 years old" }),
  hobby: z.enum(allHobbies),
  country: z.object({
    icon: z.string(),
    name: z.string(),
    abbr: z.string(),
    code: z.string(),
  }),
  longMessage: z
    .string({ required_error: "Pls drop a message, I promise someone reads it" })
    .min(10, { message: "Its too short" }),
  catBreed: z.enum(allCatBreeds, { required_error: "Hey this is a very important question >:(" }),
  catName: z.enum(allCatNames, { required_error: "Please suggest a name" }),
  //.refines to check instead of .literal(true) so ts doesnt complain when passing changeHandlers and stuff
  switch: z.boolean().refine((val) => val === true, { message: "Just press this pls" }),
  agreesToServe: z.boolean().refine((val) => val === true, { message: "D: how can you not" }),
});

const DemoForm = () => {
  const form = useForm({
    schema: formSchema,
    defaultValues: {
      username: "",
    },
  });

  const [formDisabled, setFormDisabled] = useState(false);

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <label className="flex items-center gap-2">
        Form disabled
        <Checkbox
          checked={formDisabled}
          onCheckedChange={(val) => setFormDisabled(typeof val === "boolean" ? val : false)}
        />
      </label>
      <Form
        disabled={formDisabled}
        form={form}
        onSubmit={({ age, username, country, hobby, catBreed }) => {
          alert(
            `Hi ${age} year ol' ${username} from ${country.name}. It seems you like ${hobby} and you like ${catBreed} cats`
          );
        }}
      >
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md">Username</FormLabel>
                <FormControl>
                  <Input variants={{ size: "lg" }} placeholder="A cool username" {...field} />
                </FormControl>
                <div>
                  <FormDescription>This is your public display name.</FormDescription>
                  <FormMessage className="text-md" />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="age"
            render={() => (
              <FormItem>
                <FormLabel className="text-md">Age</FormLabel>
                <FormControl>
                  {/* For string inputs that need to be interpreted as number, use this method instead */}
                  <Input {...form.register("age", { valueAsNumber: true })} />
                </FormControl>
                <div>
                  <FormMessage className="text-md" />
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md">Where are ya from</FormLabel>
                <Autocomplete value={field.value} onValueChange={field.onChange} options={allCountries} label="name">
                  {/* Form control should wrap the element which works with label i.e. is input, button, etc. */}
                  <FormControl>
                    <AutocompleteTrigger>
                      <AutocompleteValue placeholder="Select a country" />
                    </AutocompleteTrigger>
                  </FormControl>
                  <AutocompleteContent>
                    {allCountries.map((country) => {
                      return (
                        <AutocompleteItem key={country.abbr} value={country}>
                          {country.name}
                        </AutocompleteItem>
                      );
                    })}
                  </AutocompleteContent>
                </Autocomplete>

                <div>
                  <FormMessage className="text-md" />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="hobby"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md">Favorite hobby</FormLabel>
                <Autocomplete value={field.value} onValueChange={field.onChange} options={allHobbies}>
                  {/* Form control should wrap the element which works with label i.e. is input, button, etc. */}
                  <FormControl>
                    <AutocompleteTrigger>
                      <AutocompleteValue placeholder="Select a hobby" />
                    </AutocompleteTrigger>
                  </FormControl>
                  <AutocompleteContent>
                    {allHobbies.map((hobby) => {
                      return (
                        <AutocompleteItem key={hobby} value={hobby}>
                          {hobby}
                        </AutocompleteItem>
                      );
                    })}
                  </AutocompleteContent>
                </Autocomplete>

                <div>
                  <FormMessage className="text-md" />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="catBreed"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md">What kinda cat you enjoy ? {field.value}</FormLabel>

                <Select
                  name={field.name}
                  value={field.value}
                  onValueChange={(val) => {
                    field.onChange(val as any);
                  }}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your favourite cat breed" />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent>
                    <SelectGroup>
                      {allCatBreeds.map((breed) => (
                        <SelectItem key={breed} value={breed}>
                          {breed}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <div>
                  <FormMessage className="text-md" />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="longMessage"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md">Leave a super important message for someone</FormLabel>
                <FormControl>
                  <Textarea {...field} placeholder="A really cool message" />
                </FormControl>
                <div>
                  <FormMessage className="text-md" />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="catName"
            render={({ field: { onChange, ...field } }) => (
              <FormItem>
                <FormControl>
                  <RadioGroup {...field} onValueChange={onChange as (val: string) => void}>
                    {allCatNames.map((name) => {
                      return (
                        <div className="flex items-center gap-2" key={name}>
                          <RadioGroupItem value={name} id={`pick-cat-radio-${name}`} />
                          <Label htmlFor={`pick-cat-radio-${name}`}>{name}</Label>
                        </div>
                      );
                    })}
                  </RadioGroup>
                </FormControl>
                <div>
                  <FormMessage className="text-md" />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="switch"
            render={({ field: { onChange, value, ...field } }) => (
              <FormItem>
                <div className="flex items-center gap-2">
                  <FormLabel className="text-md">Do you agree to serve cats our lords and saviors ?</FormLabel>

                  <FormControl>
                    <Switch
                      {...field}
                      onCheckedChange={(val) => {
                        if (typeof val !== "boolean") return;
                        onChange(val);
                      }}
                      checked={value}
                    />
                  </FormControl>
                </div>

                <div>
                  <FormMessage className="text-md" />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="agreesToServe"
            render={({ field: { onChange, value, ...field } }) => (
              <FormItem>
                <div className="flex items-center gap-2">
                  <FormLabel className="text-md">Do you agree to serve cats our lords and saviors ?</FormLabel>

                  <FormControl>
                    <Checkbox
                      {...field}
                      onCheckedChange={(val) => {
                        if (typeof val !== "boolean") return;
                        onChange(val);
                      }}
                      checked={value}
                    />
                  </FormControl>
                </div>

                <div>
                  <FormMessage className="text-md" />
                </div>
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </div>
      </Form>
    </div>
  );
};

export default DemoForm;
