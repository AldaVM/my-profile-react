import styled from "@emotion/styled";

export const WrapperConsole = styled("section")`
  padding-top: 2rem;
  width: 100%;
  max-width: 1100px;
`;

export const HeaderConsole = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1em 0;
  width: 100%;
  background-color: #f1f3f5;
  border-radius: 1em 1em 0px 0px;

  & i {
    display: inline-block;
    width: 15px;
    height: 15px;
    margin: 0 0.8em;
    font-weight: 700;
    color: #000;
    cursor: pointer;
  }
`;

export const WrapperConsoleContent = styled("div")`
  opacity: ${(props) => (props.visible ? "1" : "0")};
  display: ${(props) => (props.visible ? "block" : "none")};
  padding-bottom: 1em;
`;

export const ObjectSkills = styled("div")`
  padding-left: 1em;
`;

export const SkillItems = styled("ul")`
  padding-left: 1.5em;

  li {
    color: #5bc236;
    padding-bottom: 0.5em;
  }
`;

export const ControlersConsole = styled("div")`
  display: flex;
  flex-direction: row;
`;

export const BodyConsole = styled("div")`
  width: 100%;
  padding: 1em 0.8em;
  background-color: #300a24;
  color: #fff;
  overflow-y: scroll;
  max-height: 600px;
  height: 34rem;

  @media screen and (max-width: 400px) {
    height: 24rem;
  }

  h4 {
    margin-top: 0.5em;
    color: #fff;
    font-weight: 400;
  }

  .text-green {
    color: #5bc236;
  }

  .text-yellow {
    color: #f5ec42;
  }

  .faild-command {
    color: #fff;
  }

  pre {
    font-family: Courier New, Courier, monospace;
    line-height: 1.1;
    color: #00ff00;
    font-weight: 700;
    font-size: 25px;
    padding: 0;

    @media screen and (max-width: 500px) {
      font-size: 10px;
    }

    @media screen and (max-width: 400px) {
      font-size: 8px;
    }
  }

  span {
    display: inline-block;
    width: 100%;
    margin: 0.5em 0;
  }

  em {
    color: #19a8ff;
  }

  input {
    background-color: transparent;
    border: none;
    color: #fff;
  }
`;
