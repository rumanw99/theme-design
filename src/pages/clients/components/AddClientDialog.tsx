import React from "react";
import {
  GenericDialog,
  GenericDialogProps,
} from "@/shared/components/GenericDialog";
import { PropsWithChildren } from "react";

export const AddClientDialog = ({
  children,
  ...props
}: PropsWithChildren<Pick<GenericDialogProps, "onClose" | "open">>) => {
  return (
    <GenericDialog
      {...props}
      dialog={{
        title: "Add Client",
        submitButton: {
          label: "Add",
          form: "ClientForm",
          type: "submit",
        },
      }}
    >
      {children}
    </GenericDialog>
  );
};
