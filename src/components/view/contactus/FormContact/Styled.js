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
  justify-content: right;

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

export const Form = styled("form")`
  display: flex;
  flex-direction: column;
  padding: 1em 2em;

  @media screen and (max-width: 600px) {
    padding: 1em 1em;
  }

  input,
  textarea {
    padding: 0.5em;
    background-color: rgb(242, 241, 229);
    margin: 0.5em 0;
    font-family: var(--fontFamily);
    font-size: 15px;
    border: 2px solid #000;
    border-radius: 2px;

    &::placeholder {
      color: black;
      font-weight: bold;
      font-family: var(--fontFamily);
    }
  }

  button {
    padding: 0.5em 1.5em;
    background-color: rgb(242, 241, 229);
    border: 2px solid #000;
    border-radius: 2px;
    align-self: center;
    margin: 0.5em 0;
    cursor: pointer;
    color: #000;
    font-weight: 700;
  }
`;

export const FormInputs = styled("div")`
  width: 100%;
  display: flex;
  justify-content: space-between;

  input {
    width: 49%;
  }
`;
