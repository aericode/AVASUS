import { useScreen } from "../../contexts/ScreenSizeContext";
import { SearchContainer, SearchIcon, SearchInput } from "./styles";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


export function NavbarSearch() {
  const { isSmallScreen } = useScreen();

  return (
    <SearchContainer isSmallScreen={isSmallScreen}>
      <SearchIcon icon={faSearch} />
      <SearchInput type="text" placeholder="Busca por um assunto..." />
    </SearchContainer>
  );
}