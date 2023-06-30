import React from "react";
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteTrigger,
  AutocompleteValue,
} from "@/components/ui/Autocomplete";
import { Button } from "@/components/ui/Button";
import { Search } from "lucide-react";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
  {
    value: "gatsby",
    label: "Gatsby",
  },
  {
    value: "actix",
    label: "Actix",
  },
  {
    value: "vanillajs",
    label: "VanillaJs",
  },
  { value: "php", label: "Php" },
];

const works = frameworks.map((fw) => fw.label);

const DemoAutocomplete = () => {
  return (
    <div className="flex w-full flex-col items-center self-center">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Autocomplete options={frameworks} label="label">
          <AutocompleteTrigger>
            <AutocompleteValue />
          </AutocompleteTrigger>
          <AutocompleteContent>
            {frameworks.map((framework) => (
              <AutocompleteItem key={framework.value} value={framework} disabled={framework.value === "php"}>
                {framework.label}
              </AutocompleteItem>
            ))}
          </AutocompleteContent>
        </Autocomplete>

        <Autocomplete options={frameworks} label="label">
          <AutocompleteTrigger aria-invalid>
            <AutocompleteValue />
          </AutocompleteTrigger>
          <AutocompleteContent>
            {frameworks.map((framework) => (
              <AutocompleteItem key={framework.value} value={framework} disabled={framework.value === "php"}>
                {framework.label}
              </AutocompleteItem>
            ))}
          </AutocompleteContent>
        </Autocomplete>

        <Autocomplete options={works}>
          <AutocompleteTrigger asChild>
            <Button className="px-2">
              <AutocompleteValue placeholder="Framework" />
            </Button>
          </AutocompleteTrigger>
          <AutocompleteContent
            input={
              <AutocompleteInput placeholder="lallalala">
                <Search className="mr-2 inline h-4 w-4 shrink-0 opacity-50" />
              </AutocompleteInput>
            }
          >
            {frameworks.map((framework) => (
              <AutocompleteItem key={framework.value} value={framework} disabled={framework.value === "php"}>
                {framework.label}
              </AutocompleteItem>
            ))}
          </AutocompleteContent>
        </Autocomplete>
      </div>
    </div>
  );
};

export default DemoAutocomplete;
