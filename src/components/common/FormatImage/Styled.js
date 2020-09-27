import styled from "@emotion/styled";

export const ImageCropper = styled("div")`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  position: relative;
  overflow: hidden;
  border-radius: ${(props) => (props.square ? "none" : "50%")};
  box-shadow: ${(props) =>
    props.square
      ? `0 0.2em #c2cad6, 0 -0.2em #c2cad6, 0.2em 0 #c2cad6, -0.2em 0 #c2cad6`
      : "none"};
`;

export const Image = styled("img")`
  display: inline-block;
  margin: 0 auto;
  margin-left: -25%;
  height: 100%;
  width: auto;
`;
