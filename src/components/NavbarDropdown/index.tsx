import { DropdownContainer, DropdownItem, DropdownList, NavLink } from "./styles";

interface DropdownBlockProps{
  link: string,
  text: string
}

function DropdownBlock({link, text}:DropdownBlockProps){
  return(
  <DropdownItem>
    <NavLink href={link}>
      {text}
    </NavLink>
  </DropdownItem>
  )
}

export function NavbarDropdown() {
  return (
    <DropdownContainer>
      <DropdownList isOpen={true}>
        <DropdownBlock link={'/'} text={'Início'} />
        <DropdownBlock link={'#'} text={'Sobre Nós'} />
        <DropdownBlock link={'/cursos'} text={'Cursos'} />
        <DropdownBlock link={'/parceiros'} text={'Parceiros'} />
        <DropdownBlock link={'/transparencia'} text={'Transparência'} />
        <DropdownBlock link={'#'} text={'Contato'} />
        <DropdownBlock link={'#'} text={'Entrar'} />
        <DropdownBlock link={'#'} text={'Cadastrar'} />
      </DropdownList>
    </DropdownContainer>
  )
}