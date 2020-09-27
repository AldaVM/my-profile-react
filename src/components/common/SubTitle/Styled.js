import styled from "@emotion/styled";

export const DividerTitle = styled("div")`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2rem;
`;

export const LineTitle = styled("hr")`
  flex: 1;
  background-color: var(--colorLine);
  height: 2px;
`;

export const Title = styled("h2")`
  text-align: center;
  margin: 0 20px;
  text-shadow: 1px 0px 0px var(--colorSecondary);
`;
