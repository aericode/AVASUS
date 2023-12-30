import { NavItem, NavLink, NavList } from "./styles";

export function NavbarLinks() {
  return (
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
  )
}