import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/Tabs";

import { DollarSign, Download } from "lucide-react";

const Dashboard = () => {
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

export default Dashboard;
