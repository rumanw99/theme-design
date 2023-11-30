import { useFormik } from "formik";
import * as Yup from "yup";
import _ from "lodash";
import { Class } from "./useClasses";

export const useClassForm = (
  initialValues: Class = {
    createdAt: "",
    title: "",
    image: "",
    coach_name: "",
    timing: "",
    price: 0,
    description: "",
    coach_brief: "",
    id: _.uniqueId("UniqueId"),
  }
) => {
  const formik = useFormik<Class>({
    initialValues,
    onSubmit: (result) => {
      console.log(result);
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      image: Yup.string().required("Image is required"),
      coach_name: Yup.string().required("Coach Name is required"),
      timing: Yup.string().required("Timing is required"),
      price: Yup.number().min(0, "Price must be greater than or equal to 0"),
      description: Yup.string().required("Description is required"),
      coach_brief: Yup.string().required("Coach Brief is required"),
    }),
  });
  return formik;
};
