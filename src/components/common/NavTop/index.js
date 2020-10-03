import { Nav, NavList, NavItem } from "./Styled";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  getPositionElement,
  positionScrollOfElement,
} from "../../../utils/domFunctions";

export default function NavTop({ isMobile = false, handleNavbar }) {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  function handleScroll() {
    const offset = window.scrollY;
    if (offset > 40 && !window.matchMedia("(max-width: 500px)").matches) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  function handleClick(e) {
    const tagName = e.target.tagName;

    if (tagName === "A") {
      let position = getPositionElement(e.target.dataset.name_section);
      if (position > 1) {
        positionScrollOfElement(position);
      } else {
        router.push("/");
        positionScrollOfElement(1);
      }
    }

    if (window.matchMedia("(max-width: 500px)").matches) handleNavbar();
  }

  return (
    <Nav
      isMobile={isMobile}
      className={scrolled ? "scrolled" : ""}
      onClick={handleClick}
    >
      <NavList>
        <NavItem>
          <a aria-label="Sobre mí" data-name_section="aboutme">
            Sobre mí
          </a>
        </NavItem>
        <NavItem>
          <a aria-label="Habilidades" data-name_section="skills">
            Habilidades
          </a>
        </NavItem>
        <NavItem>
          <a aria-label="Mi Blog" data-name_section="myblog">
            Mi Blog
          </a>
        </NavItem>
        <NavItem>
          <a aria-label="Contáctame" data-name_section="contactus">
            Contáctame
          </a>
        </NavItem>
      </NavList>
    </Nav>
  );
}
