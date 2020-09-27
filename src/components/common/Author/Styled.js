import styled from "@emotion/styled";

export const AvatarWrapper = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const AvatarAuthor = styled("div")`
  margin: 1em;
  display: flex;
  flex-direction: column;
`;

export const AvatarNick = styled("span")`
  font-weight: 700;
  font-size: 12px;
  margin-bottom: 1em;
`;

export const AvatarDate = styled("span")`
  font-weight: 300;
  font-size: 12px;
  word-spacing: -3px;
  color: rgba(0, 0, 0, 0.8);
`;
