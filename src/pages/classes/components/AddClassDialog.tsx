import {
  GenericDialog,
  GenericDialogProps,
} from "@/shared/components/GenericDialog";
import { PropsWithChildren } from "react";

export const AddClassDialog = ({
  children,
  ...props
}: PropsWithChildren<Pick<GenericDialogProps, "onClose" | "open">>) => {
  return (
    <GenericDialog
      {...props}
      dialog={{
        title: "Add Class",
        submitButton: {
          label: "Add",
          form: "ClassForm",
          type: "submit",
        },
      }}
    >
      {children}
    </GenericDialog>
  );
};
