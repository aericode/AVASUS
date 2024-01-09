import { NavItem, NavLink, NavList } from "./styles";

export function NavbarLinks() {
  return (
    <NavList>
      <NavItem>
        <NavLink href="/">Início</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Sobre Nós</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/cursos">Cursos</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/parceiros">Parceiros</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/transparencia">Transparência</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Contato</NavLink>
      </NavItem>
    </NavList>
  )
}