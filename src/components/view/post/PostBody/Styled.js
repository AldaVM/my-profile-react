import styled from "@emotion/styled";

export const PostBodyWrapper = styled("div")`
  max-width: 750px;
  width: 70%;
  margin: auto;
  padding: 0 1em;

  p {
    font-size: 16px;
    line-height: 1.5;
    padding: 1em 0;
  }

  h1 {
    line-height: 1.5;
    padding: 1em 0;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
