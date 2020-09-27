import styled from "@emotion/styled";

export const WrapperCard = styled("article")`
  border: 2px solid #f6f7f9;
`;

export const GridCards = styled("div")`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;

  @media screen and (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
