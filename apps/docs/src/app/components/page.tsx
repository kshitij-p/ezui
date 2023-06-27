import DemoAccordion from "@/components/demo/DemoAccordion";
import DemoAutocomplete from "@/components/demo/DemoAutocomplete";
import DemoAvatar from "@/components/demo/DemoAvatar";
import DemoCard from "@/components/demo/DemoCard";
import DemoCheckbox from "@/components/demo/DemoCheckbox";
import DemoCollapsible from "@/components/demo/DemoCollapsible";
import DemoCommand from "@/components/demo/DemoCommand";
import DemoDropdownMenu from "@/components/demo/DemoDropdownMenu";
import DemoForm from "@/components/demo/DemoForm";
import DemoHoverCard from "@/components/demo/DemoHoverCard";
import DemoNavigationMenu from "@/components/demo/DemoNavigationMenu";
import DemoPopover from "@/components/demo/DemoPopover";
import DemoRadioGroup from "@/components/demo/DemoRadioGroup";
import DemoScrollArea from "@/components/demo/DemoScrollArea";
import DemoSeparator from "@/components/demo/DemoSeparator";
import DemoSheet from "@/components/demo/DemoSheet";
import DemoSkeleton from "@/components/demo/DemoSkeleton";
import DemoSwitch from "@/components/demo/DemoSwitch";
import DemoTable from "@/components/demo/DemoTable";
import DemoTabs from "@/components/demo/DemoTabs";
import DemoToast from "@/components/demo/DemoToast";
import DemoToggle from "@/components/demo/DemoToggle";
import DemoToggleGroup from "@/components/demo/DemoToggleGroup";
import DemoTooltip from "@/components/demo/DemoTooltip";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/AlertDialog";
import { Button } from "@/components/ui/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
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
import { Textarea } from "@/components/ui/Textarea";

import Link from "next/link";

const page = () => {
  return (
    <div className="flex max-w-max flex-col gap-8 px-4 md:p-8">
      <div className="flex flex-wrap gap-8">
        <div className="flex flex-col gap-8">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="max-w-max" variants={{ type: "secondary" }}>
                Edit Profile
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="text-xl">Edit profile</DialogTitle>
                <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="name">Name</label>
                  <Input variants={{ size: "sm" }} id="name" defaultValue="Pedro Duarte" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="username">Username</label>
                  <Input variants={{ size: "sm" }} id="username" defaultValue="@peduarte" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variants={{ size: "sm", type: "secondary" }}>Discard Changes</Button>
                </DialogClose>
                <Button variants={{ size: "sm" }} type="submit">
                  Save changes
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="max-w-max" variants={{ type: "danger" }}>
                Delete Profile
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="text-xl">Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your account and remove your data from our
                  servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel asChild>
                  <Button variants={{ size: "sm", type: "danger-secondary" }}>Cancel</Button>
                </AlertDialogCancel>
                <AlertDialogAction asChild>
                  <Button variants={{ size: "sm", type: "danger" }}>Continue</Button>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel className="">Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem disabled value="pineapple">
                  Pineapple
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <DemoSheet />
        </div>
        <div className="flex max-w-full flex-col gap-8">
          <Input variants={{ size: "xs" }} defaultValue={"The quicky brown fox"} />
          <Input variants={{ size: "sm" }} defaultValue={"The quicky brown fox"} />
          <Input variants={{ size: "md" }} defaultValue={"The quicky brown fox"} />
          <Input variants={{ size: "lg" }} defaultValue={"The quicky brown fox"} />
          <Input variants={{ size: "xl" }} defaultValue={"The quicky brown fox"} />
        </div>
        <div className="flex max-w-full flex-col gap-8">
          <Textarea variants={{ size: "xs" }} defaultValue={"The quicky brown fox"} />
          <Textarea variants={{ size: "sm" }} defaultValue={"The quicky brown fox"} />
          <Textarea variants={{ size: "md" }} defaultValue={"The quicky brown fox"} />
          <Textarea variants={{ size: "lg" }} defaultValue={"The quicky brown fox"} />
          <Textarea variants={{ size: "xl" }} defaultValue={"The quicky brown fox"} />
        </div>
        <div className="flex max-w-full flex-col items-center gap-8">
          <Button variants={{ size: "xs" }}>Settings</Button>
          <Button variants={{ size: "sm" }}>Settings</Button>
          <Button variants={{ size: "md" }}>Settings</Button>
          <Button variants={{ size: "lg" }}>Settings</Button>
          <Button variants={{ size: "xl" }}>Settings</Button>
        </div>
        <div className="flex flex-col items-center gap-8">
          <Button variants={{ size: "xs", type: "secondary" }}>Settings</Button>
          <Button variants={{ size: "sm", type: "secondary" }}>Settings</Button>
          <Button variants={{ size: "md", type: "secondary" }}>Settings</Button>
          <Button variants={{ size: "lg", type: "secondary" }}>Settings</Button>
          <Button variants={{ size: "xl", type: "secondary" }}>Settings</Button>
        </div>
        <div className="flex flex-col items-center gap-8">
          <Button variants={{ size: "xs", type: "danger" }}>Settings</Button>
          <Button variants={{ size: "sm", type: "danger" }}>Settings</Button>
          <Button variants={{ size: "md", type: "danger" }}>Settings</Button>
          <Button variants={{ size: "lg", type: "danger" }}>Settings</Button>
          <Button variants={{ size: "xl", type: "danger" }}>Settings</Button>
        </div>
        <div className="flex flex-col items-center gap-8">
          <Button variants={{ size: "xs", type: "danger-secondary" }}>Settings</Button>
          <Button variants={{ size: "sm", type: "danger-secondary" }}>Settings</Button>
          <Button variants={{ size: "md", type: "danger-secondary" }}>Settings</Button>
          <Button variants={{ size: "lg", type: "danger-secondary" }}>Settings</Button>
          <Button variants={{ size: "xl", type: "danger-secondary" }}>Settings</Button>
        </div>
        <div className="flex flex-col items-center gap-8">
          <Button variants={{ size: "xs", type: "ghost" }}>Settings</Button>
          <Button variants={{ size: "sm", type: "ghost" }}>Settings</Button>
          <Button variants={{ size: "md", type: "ghost" }}>Settings</Button>
          <Button variants={{ size: "lg", type: "ghost" }}>Settings</Button>
          <Button variants={{ size: "xl", type: "ghost" }}>Settings</Button>
        </div>
        <div className="flex flex-col items-center gap-8">
          <Button asChild variants={{ size: "xs", type: "primary" }}>
            <Link href={"#"}>Link demo</Link>
          </Button>
          <Button asChild variants={{ size: "sm", type: "primary" }}>
            <Link href={"#"}>Link demo</Link>
          </Button>
          <Button asChild variants={{ size: "md", type: "primary" }}>
            <Link href={"#"}>Link demo</Link>
          </Button>
          <Button asChild variants={{ size: "lg", type: "primary" }}>
            <Link href={"#"}>Link demo</Link>
          </Button>
          <Button asChild variants={{ size: "xl", type: "primary" }}>
            <Link href={"#"}>Link demo</Link>
          </Button>
        </div>
        <DemoSkeleton />
        <DemoAvatar />
        <DemoSeparator />
        <DemoSwitch />
        <DemoCheckbox />
        <DemoRadioGroup />
        <DemoTable />
        <DemoCard />
        <DemoToggle />
        <DemoToggleGroup />
        <DemoTabs />
        <DemoScrollArea />
        <DemoToast />
        <DemoCollapsible />
        <DemoAccordion />
        <DemoPopover />
        <DemoTooltip />
        <DemoHoverCard />
        <DemoDropdownMenu />
        <DemoNavigationMenu />
        <DemoCommand />
        <DemoAutocomplete />
        <DemoForm />
      </div>
    </div>
  );
};

export default page;
