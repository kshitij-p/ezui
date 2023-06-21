import React from "react";
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteTrigger,
  AutocompleteValue,
} from "../ui/Autocomplete";
import { Button } from "../ui/Button";
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
];

const works = frameworks.map((fw) => fw.label);

const DemoAutocomplete = () => {
  return (
    <div className="self-center w-full flex flex-col items-center">
      <div className="flex items-center gap-2 justify-center">
        <Autocomplete options={frameworks} label="label">
          <AutocompleteTrigger>
            <AutocompleteValue />
          </AutocompleteTrigger>
          <AutocompleteContent>
            {frameworks.map((framework) => (
              <AutocompleteItem key={framework.value} value={framework}>
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
              <AutocompleteItem key={framework.value} value={framework}>
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
                <Search className="inline mr-2 w-4 h-4 shrink-0 opacity-50" />
              </AutocompleteInput>
            }
          >
            {frameworks.map((framework) => (
              <AutocompleteItem key={framework.value} value={framework}>
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
