import { useState } from "react";
import { useFormik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWindowMaximize,
  faWindowClose,
  faWindowMinimize,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { SubTitle } from "../../../common";
import fetchService from "../../../../utils/fetchApi";
import { URL_MAIL_API, SERVICE_SEND_MAIL } from "../../../../consts";
import ContactFormSchema from "./validate";
import {
  ContainerFormContact,
  Form,
  FormInputs,
  WrapperForm,
  HeaderForm,
  InputForm,
  TextareaForm,
  SelectForm,
  LoadingSendMsg,
  MessageReponse,
} from "./Styled";

export default function FormContact() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      names: "",
      email: "",
      subject: "",
      company: "",
      text: "",
    },
    validationSchema: ContactFormSchema,
    onSubmit: async (values) => {
      setMessage("");
      setIsLoading(true);

      const initServiceFetch = fetchService(URL_MAIL_API);
      const { sendData } = initServiceFetch(SERVICE_SEND_MAIL);

      const response = await sendData(values, {});
      setIsLoading(false);
      setMessage(response.message);

      console.log(response);
    },
  });

  return (
    <ContainerFormContact id="contactus">
      <SubTitle title="Contáctame" />
      <WrapperForm>
        <HeaderForm>
          <span>
            <FontAwesomeIcon icon={faWindowMinimize} size="xs" />
          </span>
          <span>
            <FontAwesomeIcon icon={faWindowMaximize} size="xs" />
          </span>
          <span>
            <FontAwesomeIcon icon={faWindowClose} size="xs" />
          </span>
        </HeaderForm>
        <h5>Escríbeme para trabajar juntos</h5>
        <Form onSubmit={formik.handleSubmit}>
          <FormInputs>
            <InputForm
              type="text"
              name="names"
              onChange={formik.handleChange}
              value={formik.values.names}
              error={formik.errors.names}
              placeholder="Nombres"
            />
            <InputForm
              type="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.errors.email}
              placeholder="Email"
            />
          </FormInputs>
          <SelectForm
            name="subject"
            onChange={formik.handleChange}
            value={formik.values.subject}
            error={formik.errors.subject}
          >
            <option value="">Asunto</option>
            <option value="Tutoria JavaScript">Tutoria JavaScript</option>
            <option value="Colaboración">Colaboración</option>
            <option value="Otro">Otro</option>
          </SelectForm>
          <InputForm
            type="text"
            name="company"
            onChange={formik.handleChange}
            value={formik.values.company}
            error={formik.errors.company}
            placeholder="Compañia"
          />
          <TextareaForm
            name="text"
            onChange={formik.handleChange}
            value={formik.values.text}
            error={formik.errors.text}
            placeholder="Cuéntame sobre tu proyecto"
          />
          <button type="submit" disabled={!formik.isValid}>
            ENVIAR
          </button>
        </Form>
        {isLoading && (
          <LoadingSendMsg>
            Enviando... <FontAwesomeIcon icon={faPaperPlane} size="sm" />
          </LoadingSendMsg>
        )}
        {message && <MessageReponse>{message}</MessageReponse>}
      </WrapperForm>
    </ContainerFormContact>
  );
}
