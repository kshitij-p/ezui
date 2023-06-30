import React from "react";
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

const DemoAlertDialog = () => {
  return (
    <div className="flex w-full flex-col items-center">
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
    </div>
  );
};

export default DemoAlertDialog;
