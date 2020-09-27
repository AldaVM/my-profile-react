import { Container } from "../../../common";
import styled from "@emotion/styled";

export const AboutMeContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  padding: 2rem 0;

  p {
    padding-bottom: 0.5em;
    line-height: 1.5;
    word-spacing: 1px;
    /* text-align: justify; */
  }

  h1 {
    padding-top: 2em;
    padding-bottom: 1em;
    color: #fff;
  }

  strong {
    color: #f5ec42;
  }
`;
