import * as Yup from "yup";

const ContactFormSchema = Yup.object().shape({
  names: Yup.string()
    .min(4, "Too Short!")
    .strict(false)
    .trim()
    .max(150, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  company: Yup.string()
    .strict(false)
    .trim()
    .min(2, "Too Short!")
    .max(150, "Too Long!")
    .required("Required"),
  subject: Yup.string()
    .strict(false)
    .trim()
    .min(6, "Too Short!")
    .max(150, "Too Long!")
    .required("Required"),
  text: Yup.string()
    .strict(false)
    .trim()
    .min(20, "Too Short!")
    .max(600, "Too Long!")
    .required("Required"),
});

export default ContactFormSchema;
