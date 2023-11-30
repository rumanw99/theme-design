import { useFormik } from "formik";
import * as Yup from "yup";
import { Client } from "./useClients";
import _ from "lodash";

export const useClientForm = (
  initialValues: Client = {
    full_name: "",
    address: "",
    subscription_plan: "",
    mobile_number: "",
    avatar: "",
    createdAt: "",
    id: _.uniqueId("UniqueId"),
  }
) => {
  const formik = useFormik<Client>({
    initialValues,
    onSubmit: (result) => {
      console.log(result);
    },
    validationSchema: Yup.object({
      full_name: Yup.string().required("Full Name is required"),
      address: Yup.string().required("Address is required"),
      subscription_plan: Yup.string().required("Subscription Plan is required"),
      mobile_number: Yup.string().required("Mobile Number is required"),
    }),
  });
  return formik;
};
