import { Nav, NavList, NavItem } from "./Styled";

export default function NavTop({ isMobile = false }) {
  return (
    <Nav isMobile={isMobile}>
      <NavList>
        <NavItem>
          <a aria-label="Sobre mí">Sobre mí</a>
        </NavItem>
        <NavItem>
          <a aria-label="Portafolio">Portafolio</a>
        </NavItem>
        <NavItem>
          <a aria-label="Mi Blog">Mi Blog</a>
        </NavItem>
        <NavItem>
          <a aria-label="Contáctame">Contáctame</a>
        </NavItem>
      </NavList>
    </Nav>
  );
}
