import styled from "@emotion/styled";

export const Section = styled("section")`
  width: 100%;
  transition: background 0.2s linear 0.2s;
  background-color: ${(props) => props.bg};
  color: ${(props) => props.foreground};
  padding: 4rem 1rem;
  p,
  h2,
  h3,
  h4 {
    color: ${(props) => props.foreground};
  }

  hr {
    color: ${(props) => props.foreground};
  }
`;

export const Container = styled("div")`
  max-width: 1100px;
  width: 100%;
  margin: auto;
  padding-top: 4rem;
  padding-bottom: 6rem;
`;
