import React from "react";
import {
  GenericDialog,
  GenericDialogProps,
} from "@/shared/components/GenericDialog";
import { PropsWithChildren } from "react";
export const EditClientDialog = ({
  children,
  ...props
}: PropsWithChildren<Pick<GenericDialogProps, "onClose" | "open">>) => {
  return (
    <GenericDialog
      {...props}
      dialog={{
        title: "Edit Client",
        submitButton: {
          label: "Edit",
          form: "ClientForm",
          type: "submit",
        },
      }}
    >
      {children}
    </GenericDialog>
  );
};
