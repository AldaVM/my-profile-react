import { NavTop } from "../../common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faSun, faMoon, faBars } from "@fortawesome/free-solid-svg-icons";
import {
  HeaderSocial,
  HeaderContainer,
  ListSocialMedia,
  ButtonChangeTheme,
  TitleLogo,
  ButtonThemeLight,
  ButtonThemeDark,
  ButtonToggle,
} from "./Styled";
import { useState, useContext } from "react";
import ThemeContext from "../../../stateManagement/store/themeContext";

export default function Header() {
  const { changeTheme, theme } = useContext(ThemeContext);

  const [iconTheme, setIconTheme] = useState("sun");
  const [openNav, setOpenNav] = useState(false);

  function onChangeTheme() {
    if (iconTheme === "sun") {
      setIconTheme("moon");
    } else {
      setIconTheme("sun");
    }
    changeTheme();
  }

  function onShowNavbar() {
    setOpenNav(!openNav);
  }

  return (
    <header>
      <HeaderContainer bg={theme?.headerbg}>
        <HeaderSocial>
          <TitleLogo>AldairVM</TitleLogo>
          <ListSocialMedia>
            <li>
              <i>
                <FontAwesomeIcon icon={faGithub} />
              </i>
            </li>
            <li>
              <i>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </i>
            </li>
          </ListSocialMedia>
        </HeaderSocial>
        <ButtonChangeTheme onClick={onChangeTheme}>
          <ButtonThemeLight theme={iconTheme}>
            <FontAwesomeIcon icon={faSun} />
          </ButtonThemeLight>
          <ButtonThemeDark theme={iconTheme}>
            <FontAwesomeIcon icon={faMoon} />
          </ButtonThemeDark>
        </ButtonChangeTheme>
        <ButtonToggle onClick={onShowNavbar}>
          <i>
            <FontAwesomeIcon icon={faBars} />
          </i>
        </ButtonToggle>
      </HeaderContainer>

      <NavTop isMobile={openNav} handleNavbar={onShowNavbar} />
    </header>
  );
}
