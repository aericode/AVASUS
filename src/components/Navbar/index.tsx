import { NavbarLogo } from "../NavbarLogo";
import { NavbarSearch, SearchBar } from "../NavbarSearch";
import { NavbarUserMenu } from "../NavbarUserMenu";
import { NavItem, NavLink, NavList, NavbarContainer } from "./styles";

export function Navbar(){
    return (
      <NavbarContainer>
        <NavbarLogo/>
        <NavList>
          <NavItem>
            <NavLink href="#">Início</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Sobre Nós</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Cursos</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Parceiros</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Transparência</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Contato</NavLink>
          </NavItem>
        </NavList>
        <NavbarSearch/>
        <NavbarUserMenu/>
      </NavbarContainer>
    );
  };

