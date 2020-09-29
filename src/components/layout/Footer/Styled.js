import styled from "@emotion/styled";

export const Footer = styled("footer")`
  width: 100%;
  padding: 1.5em 0;
  background-color: ${(props) => props.bg};
  text-align: center;

  span {
    color: ${(props) => props.fontColor};
    font-size: 12px;
    text-shadow: 1px 0px 0px var(--colorSecondary);
  }
`;
