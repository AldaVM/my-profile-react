import styled from "@emotion/styled";

export const Article = styled("article")`
  background-color: ${(props) => props.bg};
  color: ${(props) => props.fontColor};

  p,
  span {
    color: ${(props) => props.fontColor};
  }
`;
