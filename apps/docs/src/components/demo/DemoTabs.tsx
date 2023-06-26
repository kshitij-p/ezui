import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/Tabs";
import { Label } from "../ui/Label";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";

const DemoTabs = () => {
  return (
    //To do replace divs with Card
    <div className="flex flex-col items-center">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div>
            <div>
              <div>Account</div>
              <div>Make changes to your account here. Click save when you're done.</div>
            </div>
            <div className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="Pedro Duarte" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="@peduarte" />
              </div>
            </div>
            <div>
              <Button>Save changes</Button>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="password">
          <div>
            <div>
              <div>Password</div>
              <div>Change your password here. After saving, you'll be logged out.</div>
            </div>
            <div className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </div>
            <div>
              <Button>Save password</Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DemoTabs;
