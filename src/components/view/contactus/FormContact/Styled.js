import { Container } from "../../../common";
import styled from "@emotion/styled";

export const ContainerFormContact = styled(Container)`
  padding: 4rem 0;
`;

export const HeaderForm = styled("div")`
  padding: 1em 2em;
  background-color: rgb(242, 241, 229);
  border-bottom: 2px solid rgb(110, 109, 95);
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  span {
    display: inline-block;
    width: 15px;
    height: 15px;
    margin-left: 1em;
    font-weight: 700;
    color: #000;
    cursor: pointer;
  }

  @media screen and (max-width: 600px) {
    padding: 1em 1em;
  }
`;

export const WrapperForm = styled("div")`
  max-width: 600px;
  width: 100%;
  margin: auto;
  background-color: rgb(242, 241, 229);
  border: 3px solid rgb(110, 109, 95);
  color: #000;

  h5 {
    font-size: 20px;
    text-align: center;
    padding-top: 2em;
    color: #000;

    @media screen and (max-width: 600px) {
      font-size: 1px;
    }
  }
`;

export const InputForm = styled("input")`
  padding: 0.5em;
  background-color: rgb(242, 241, 229);
  margin: 0.5em 0;
  font-family: var(--fontFamily);
  font-size: 15px;
  border: 2px solid;
  border-color: ${(props) => (props.error ? "tomato" : "#000")};
  border-radius: 2px;
  &::placeholder {
    color: black;
    font-weight: bold;
    font-family: var(--fontFamily);
  }
`;

export const TextareaForm = styled("textarea")`
  padding: 0.5em;
  background-color: rgb(242, 241, 229);
  margin: 0.5em 0;
  font-family: var(--fontFamily);
  font-size: 15px;
  border: 2px solid;
  border-color: ${(props) => (props.error ? "tomato" : "#000")};
  border-radius: 2px;
  &::placeholder {
    color: black;
    font-weight: bold;
    font-family: var(--fontFamily);
  }
`;

export const SelectForm = styled("select")`
  padding: 0.5em;
  background-color: rgb(242, 241, 229);
  margin: 0.5em 0;
  font-family: var(--fontFamily);
  font-size: 15px;
  color: black;
  font-weight: 700;
  border: 2px solid;
  border-color: ${(props) => (props.error ? "tomato" : "#000")};
  border-radius: 2px;

  option {
    padding: none;
  }
`;

export const Form = styled("form")`
  display: flex;
  flex-direction: column;
  padding: 1em 2em;

  @media screen and (max-width: 600px) {
    padding: 1em 1em;
  }

  button {
    padding: 0.8em 1.5em;
    background-color: rgb(242, 241, 229);
    border: 2px solid #000;
    border-radius: 2px;
    align-self: center;
    margin: 0.5em 0;
    cursor: pointer;
    color: #000;
    font-weight: 700;
    box-shadow: 1px 1px 2px transparent;
    transition: box-shadow 0.2s linear 0.2s;

    :disabled {
      background-color: rgba(0, 0, 0, 0.4);
    }

    :hover {
      box-shadow: 1px 1px 2px #888888;
    }
  }
`;

export const MessageReponse = styled("div")`
  text-align: center;
  font-size: 1em;
  vertical-align: middle;
  line-height: 1.5;
  padding-top: 1em;
  padding-bottom: 2em;
`;

export const LoadingSendMsg = styled("div")`
  text-align: center;
  font-size: 1em;
  vertical-align: middle;
  line-height: 1.5;
  padding-top: 1em;
  padding-bottom: 2em;
`;

export const FormInputs = styled("div")`
  width: 100%;
  display: flex;
  justify-content: space-between;

  input {
    width: 49%;
  }
`;
