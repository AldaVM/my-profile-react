import styled from "@emotion/styled";

export const HeaderCardPost = styled("div")`
  width: 100%;
  padding: 1em;
  height: 100px;
`;

export const Tag = styled("span")`
  display: inline-block;
  background-color: rgb(246, 247, 249);
  font-size: 12px;
  font-weight: 700;
  padding: 10px;
  color: #005a00 !important;
  box-shadow: rgb(194, 202, 214) 0px 0.2em, rgb(194, 202, 214) 0px -0.2em,
    rgb(194, 202, 214) 0.2em 0px, rgb(194, 202, 214) -0.2em 0px;
  position: absolute;
  bottom: 15px;
  right: 15px;
`;

export const WrapperImagePost = styled("div")`
  position: relative;
  overflow: hidden;
  transition: transform 3s ease;

  img:hover {
    transform: scale(1.5);
  }
`;

export const FooterCardPost = styled("div")`
  width: 100%;
  padding: 1em 1em;
  display: grid;
  grid-template-columns: 20% 50% 30%;
  align-items: center;

  span {
    display: inline-block;
    width: 100%;
    font-size: 13px;
    line-height: 1.5;
  }

  h4 {
    margin: 0 0.5em;
  }

  .text-right {
    text-align: right;
  }
`;
