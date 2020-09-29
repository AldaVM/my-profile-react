import styled from "@emotion/styled";

export const Nav = styled("nav")`
  position: relative;
  top: 0;
  right: 0;
  z-index: var(--z-tooltip);
  width: 100%;
  background-color: var(--colorPrimaryDark);
  box-shadow: none;
  transition: box-shadow 0.35s ease-in-out;

  @media screen and (max-width: 500px) {
    position: fixed;
    top: 0;
    right: ${(props) => (props.isMobile ? "0" : "-100%")};
    padding: 2rem 0;
    background-color: var(--colorPrimaryDark);
  }
`;

export const NavList = styled("ul")`
  color: var(--colorSecondary);
  font-weight: var(--textBold);
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    justify-content: flex-start;
    height: 100vh;
  }
`;

export const NavItem = styled("li")`
  cursor: pointer;
  transition: text-shadow 0.35s ease-in-out;
  padding: 1em;
  font-size: 14px;
  text-shadow: ${(props) =>
    props.active ? "3px 2px 1px var(--colorSecondaryLightOpacity)" : "none"};

  &:hover {
    text-shadow: 3px 2px 1px var(--colorSecondaryLightOpacity);
  }

  & a {
    color: var(--colorSecondary);
    text-decoration: none;
  }
`;
