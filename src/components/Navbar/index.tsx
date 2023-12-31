import { NavbarLinks } from "../NavbarLinks";
import { NavbarLogo } from "../NavbarLogo";
import { NavbarSandwichMenu } from "../NavbarSandwichMenu";
import { NavbarSearch } from "../NavbarSearch";
import { NavbarUserMenu } from "../NavbarUserMenu";
import { Container } from "./styles";

export function Navbar() {
  return (
    <Container>
      <NavbarLogo />
      {false ?
        <>
          <NavbarLinks />
          <NavbarSearch />
          <NavbarUserMenu />
        </>
        :
        <>
          <NavbarSearch />
          <NavbarSandwichMenu/>
        </>
        }

    </Container>
  );
};

