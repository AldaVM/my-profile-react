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

  h2 {
    padding: 1em 0;
  }

  blockquote {
    background-color: #000;
    margin: 1.5em 0;
    padding: 1em;
    border-radius: 0.5em;
  }

  code {
    font-size: 15px;
    display: inline-block;
    font-family: courier, monospace;
    color: #fff;
    padding: 5px 3px;
    width: 100%;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
