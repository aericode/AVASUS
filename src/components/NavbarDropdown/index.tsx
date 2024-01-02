import { DropdownContainer, DropdownItem, DropdownList } from "./styles";

export function NavbarDropdown() {
    return (
        <DropdownContainer>
            <DropdownList isOpen={true}>
                <DropdownItem>Início</DropdownItem>
                <DropdownItem>Sobre Nós</DropdownItem>
                <DropdownItem>Cursos</DropdownItem>
                <DropdownItem>Parceiros</DropdownItem>
                <DropdownItem>Transparência</DropdownItem>
                <DropdownItem>Contato</DropdownItem>
                <DropdownItem>Entrar</DropdownItem>
                <DropdownItem>Cadastrar</DropdownItem>
            </DropdownList>
        </DropdownContainer>
    )
}