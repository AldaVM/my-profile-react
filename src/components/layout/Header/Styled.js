import styled from "@emotion/styled";

export const HeaderContainer = styled("section")`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: rgb(0, 255, 0);
`;

export const TitleLogo = styled("h3")`
  display: inline-block;
  font-size: 20px;
  color: var(--colorTextOnPrimary);
  letter-spacing: 1px;
  font-weight: var(--textBold);
  margin-bottom: 1px;

  &::before {
    content: "<";
    letter-spacing: 3px;
    color: var(--colorPrimary);
    margin: 0;
  }

  &::after {
    content: "/>";
    letter-spacing: 3px;
    color: var(--colorPrimary);
    margin: 0;
  }
`;

export const ListSocialMedia = styled("ul")`
  display: inline-block;
  li {
    display: inline-block;
    padding: 0 1em;
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const HeaderSocial = styled("section")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 1em;

  i {
    display: inline-block;
    width: 14px;
  }
`;

export const ButtonChangeTheme = styled("div")`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em;
  background-color: rgba(152, 161, 150, 0.3);

  i {
    width: 30px;
    cursor: pointer;
    position: absolute;
  }
`;

export const ButtonThemeLight = styled("i")`
  opacity: ${(props) => (props.theme === "sun" ? "1" : "0")};
  animation-name: ${(props) => (props.theme === "sun" ? "topSun" : "none")};
  animation-duration: 0.3s;
  transform: translateY(0);
  transition: 0.3s linear ease-out;

  @keyframes topSun {
    0% {
      transform: translateY(50%);
    }
    25% {
      transform: translateY(40%);
    }
    50% {
      transform: translateY(30%);
    }
    75% {
      transform: translateY(20%);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export const ButtonToggle = styled("div")`
  position: relative;
  text-align: center;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.8em 1.2em;
  z-index: var(--z-fixed);
  color: var(--colorSecondary);
  background-color: var(--colorPrimaryDark);
  cursor: pointer;
  transition-property: background-color, color, border-color;
  transition-duration: 0.35s;
  transition-timing-function: ease-out, linear;

  i {
    width: 20px;
    cursor: pointer;
  }

  @media screen and (max-width: 500px) {
    display: flex;
  }
`;

export const ButtonThemeDark = styled("i")`
  opacity: ${(props) => (props.theme === "moon" ? "1" : "0")};
  animation-name: ${(props) => (props.theme === "moon" ? "topMoon" : "none")};
  animation-duration: 0.3s;
  transform: translateY(0);
  transition: 0.3s linear ease-out;

  @keyframes topMoon {
    0% {
      transform: translateY(-50%);
    }
    25% {
      transform: translateY(-40%);
    }
    50% {
      transform: translateY(-30%);
    }
    75% {
      transform: translateY(-20%);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
