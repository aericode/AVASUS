import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SearchContainer, SearchInput } from "./styles";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export function NavbarSearch() {
    return (
      <SearchContainer>
        <FontAwesomeIcon icon={faSearch} style={{marginLeft: "10px", color: "#545454"}}/>
        <SearchInput type="text" placeholder="Busca por um assunto..." />
      </SearchContainer>
    );
  }