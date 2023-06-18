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
import Link from "next/link";

const page = () => {
  return (
    <div className="p-8 flex flex-col gap-8 max-w-max">
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
        </div>
        <div className="flex flex-col gap-8">
          <Input variants={{ size: "xs" }} defaultValue={"The quicky brown fox"} />
          <Input variants={{ size: "sm" }} defaultValue={"The quicky brown fox"} />
          <Input variants={{ size: "md" }} defaultValue={"The quicky brown fox"} />
          <Input variants={{ size: "lg" }} defaultValue={"The quicky brown fox"} />
          <Input variants={{ size: "xl" }} defaultValue={"The quicky brown fox"} />
        </div>
        <div className="flex flex-col gap-8 items-center">
          <Button variants={{ size: "xs" }}>Settings</Button>
          <Button variants={{ size: "sm" }}>Settings</Button>
          <Button variants={{ size: "md" }}>Settings</Button>
          <Button variants={{ size: "lg" }}>Settings</Button>
          <Button variants={{ size: "xl" }}>Settings</Button>
        </div>
        <div className="flex flex-col gap-8 items-center">
          <Button variants={{ size: "xs", type: "secondary" }}>Settings</Button>
          <Button variants={{ size: "sm", type: "secondary" }}>Settings</Button>
          <Button variants={{ size: "md", type: "secondary" }}>Settings</Button>
          <Button variants={{ size: "lg", type: "secondary" }}>Settings</Button>
          <Button variants={{ size: "xl", type: "secondary" }}>Settings</Button>
        </div>
        <div className="flex flex-col gap-8 items-center">
          <Button variants={{ size: "xs", type: "danger" }}>Settings</Button>
          <Button variants={{ size: "sm", type: "danger" }}>Settings</Button>
          <Button variants={{ size: "md", type: "danger" }}>Settings</Button>
          <Button variants={{ size: "lg", type: "danger" }}>Settings</Button>
          <Button variants={{ size: "xl", type: "danger" }}>Settings</Button>
        </div>
        <div className="flex flex-col gap-8 items-center">
          <Button variants={{ size: "xs", type: "danger-secondary" }}>Settings</Button>
          <Button variants={{ size: "sm", type: "danger-secondary" }}>Settings</Button>
          <Button variants={{ size: "md", type: "danger-secondary" }}>Settings</Button>
          <Button variants={{ size: "lg", type: "danger-secondary" }}>Settings</Button>
          <Button variants={{ size: "xl", type: "danger-secondary" }}>Settings</Button>
        </div>
        <div className="flex flex-col gap-8 items-center">
          <Button variants={{ size: "xs", type: "ghost" }}>Settings</Button>
          <Button variants={{ size: "sm", type: "ghost" }}>Settings</Button>
          <Button variants={{ size: "md", type: "ghost" }}>Settings</Button>
          <Button variants={{ size: "lg", type: "ghost" }}>Settings</Button>
          <Button variants={{ size: "xl", type: "ghost" }}>Settings</Button>
        </div>
        <div className="flex flex-col gap-8 items-center">
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
      </div>
    </div>
  );
};

export default page;
