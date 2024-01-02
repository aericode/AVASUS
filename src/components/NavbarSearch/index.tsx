import { SearchContainer, SearchIcon, SearchInput } from "./styles";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface Props {
  isSmallScreen: boolean
}

export function NavbarSearch({ isSmallScreen }: Props) {
  return (
    <SearchContainer isSmallScreen={isSmallScreen}>
      <SearchIcon icon={faSearch} />
      <SearchInput type="text" placeholder="Busca por um assunto..." />
    </SearchContainer>
  );
}