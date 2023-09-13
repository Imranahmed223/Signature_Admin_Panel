import * as Yup from "yup";

export const loginSchema = Yup.object({
  // email: Yup.string().email().required("Email is required"),
  email: Yup.string().required("User Name is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Your password is too short."),
});

export const passwordChangeSchema = Yup.object().shape({
  email: Yup.string(),
  oldPassword: Yup.string().required("Old password is required"),
  newPassword: Yup.string()
    .required("New password is required")
    .matches(/[a-z]/, "Password must contain at least one lowercase character")
    .matches(/[A-Z]/, "Password must contain at least one uppercase character")
    .matches(/[0-9]/, "Password must contain at least one digit")
    .matches(/[!@#$%*]/, "Password must contain at least one special character")
    .min(8, "Password must be at least 8 characters long"),
  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match"),
});

export const passwordChangeByOTPSchema = Yup.object().shape({
  newPassword: Yup.string()
    .required("New password is required")
    .matches(/[a-z]/, "Password must contain at least one lowercase character")
    .matches(/[A-Z]/, "Password must contain at least one uppercase character")
    .matches(/[0-9]/, "Password must contain at least one digit")
    .matches(/[!@#$%*]/, "Password must contain at least one special character")
    .min(8, "Password must be at least 8 characters long"),
  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match"),
});

export const replyToSupportRequestSchema = Yup.object().shape({
  reply: Yup.string().required("Message is required"),
});

export const invitationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  role: Yup.string()
    .oneOf(["Support Manager", "Account Manager"], "Invalid role")
    .required("Role is required"),
});
