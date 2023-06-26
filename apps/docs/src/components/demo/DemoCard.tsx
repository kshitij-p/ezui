import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/Card";
import { Label } from "../ui/Label";
import { Input } from "../ui/Input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/Select";
import { Button } from "../ui/Button";

const DemoCard = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <Card className="w-full max-w-[400px]">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col items-center gap-4">
              <div className="flex w-full flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input className="max-w-full" id="name" placeholder="Name of your project" />
              </div>
              <div className="flex w-full flex-col space-y-1.5">
                <Label htmlFor="name">Framework</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                    <SelectContent position="popper">
                      <SelectItem value="next">Next.js</SelectItem>
                      <SelectItem value="sveltekit">SvelteKit</SelectItem>
                      <SelectItem value="astro">Astro</SelectItem>
                      <SelectItem value="nuxt">Nuxt.js</SelectItem>
                    </SelectContent>
                  </SelectTrigger>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variants={{ type: "secondary" }}>Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DemoCard;
