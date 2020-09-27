import { SubTitle } from "../../../common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWindowMaximize,
  faWindowClose,
  faWindowMinimize,
} from "@fortawesome/free-solid-svg-icons";
import {
  ContainerFormContact,
  Form,
  FormInputs,
  WrapperForm,
  HeaderForm,
} from "./Styled";

export default function FormContact() {
  return (
    <ContainerFormContact>
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
        <h3>Escríbeme para trabajar juntos</h3>
        <Form>
          <FormInputs>
            <input type="text" placeholder="Nombres" />
            <input type="email" placeholder="Email" />
          </FormInputs>
          <input type="text" placeholder="Compañia" />
          <textarea placeholder="Cuéntame sobre tu proyecto" />
          <button type="submit">ENVIAR</button>
        </Form>
      </WrapperForm>
    </ContainerFormContact>
  );
}
