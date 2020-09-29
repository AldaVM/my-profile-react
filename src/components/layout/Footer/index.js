import { Footer } from "./Styled";
import { useContext } from "react";
import ThemeContext from "../../../stateManagement/store/themeContext";

export default function FooterSite() {
  const { theme } = useContext(ThemeContext);

  return (
    <Footer bg={theme?.footerbg} fontColor={theme?.foreground}>
      <span>2020 Copyright© AldairVM</span>
    </Footer>
  );
}
