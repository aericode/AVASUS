import { NavbarLinks } from "../NavbarLinks";
import { NavbarLogo } from "../NavbarLogo";
import { NavbarSearch } from "../NavbarSearch";
import { NavbarUserMenu } from "../NavbarUserMenu";
import { Container } from "./styles";

export function Navbar(){
    return (
      <Container>
        <NavbarLogo/>
        <NavbarLinks/>

        <NavbarSearch/>
        <NavbarUserMenu/>
      </Container>
    );
  };

