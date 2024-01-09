import { DropdownContainer, DropdownItem, DropdownList, NavLink } from "./styles";

export function NavbarDropdown() {
  return (
    <DropdownContainer>
      <DropdownList isOpen={true}>
      <DropdownItem>
      <NavLink href="/">
        Início
      </NavLink>
    </DropdownItem>
    <DropdownItem>
      <NavLink href="#">
        Sobre Nós
      </NavLink>
    </DropdownItem>
    <DropdownItem>
      <NavLink href="/cursos">
        Cursos
      </NavLink>
    </DropdownItem>
    <DropdownItem>
      <NavLink href="/parceiros">
        Parceiros
      </NavLink>
    </DropdownItem>
    <DropdownItem>
      <NavLink href="/transparencia">
        Transparência
      </NavLink>
    </DropdownItem>
    <DropdownItem>
      <NavLink href="#">
        Contato
      </NavLink>
    </DropdownItem>
    <DropdownItem>
      <NavLink href="#">
        Entrar
      </NavLink>
    </DropdownItem>
    <DropdownItem>
      <NavLink href="#">
        Cadastrar
      </NavLink>
    </DropdownItem>
      </DropdownList>
    </DropdownContainer>
  )
}