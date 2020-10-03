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

  h2,
  h3 {
    padding: 1em 0;
  }

  blockquote {
    background-color: #000;
    margin: 1.5em 0;
    padding: 1em;
    border-radius: 0.5em;
  }

  code {
    display: inline-block;
    width: 100%;
    font-size: 15px;
    font-family: courier, monospace;
    color: #fff;
    line-height: 1.1;
    background-color: #000;
    padding: 1em;
    border-radius: 5px;
    margin: 1em 0;
  }

  .code-mark {
    display: inline;
    color: #000;
    background-color: rgba(0, 0, 0, 0.1);
    padding: 0;
    border-radius: 0;
    margin: 0 0;
  }

  .code-sintaxis {
    background-color: rgba(0, 0, 0, 0.1);
    color: #ccc;
    margin: 1.5em 0;
    padding: 1em;
    border-radius: 0.5em;
    font-family: courier, monospace;
    font-style: italic;
  }

  .space-code-2 {
    padding-left: 1em;
  }

  .space-code-4 {
    padding-left: 2em;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
