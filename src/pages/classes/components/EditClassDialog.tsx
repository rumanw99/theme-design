import React from "react";
import {
  GenericDialog,
  GenericDialogProps,
} from "@/shared/components/GenericDialog";
import { PropsWithChildren } from "react";
export const EditClassDialog = ({
  children,
  ...props
}: PropsWithChildren<Pick<GenericDialogProps, "onClose" | "open">>) => {
  return (
    <GenericDialog
      {...props}
      dialog={{
        title: "Edit Class",
        submitButton: {
          label: "Edit",
          form: "ClassForm",
          type: "submit",
        },
      }}
    >
      {children}
    </GenericDialog>
  );
};
