import styled from "@emotion/styled";

export const Container = styled("div")`
  background-color: ${(props) => props.bg};
  width: 100%;

  * {
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-family: monospace;
  }
`;

export const Main = styled("main")`
  width: 100%;
`;
