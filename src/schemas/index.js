import * as Yup from "yup";

export const loginSchema = Yup.object({
  // email: Yup.string().email().required("Email is required"),
  email: Yup.string().required("User Name is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Your password is too short."),
});
