import { useState } from "react";
import { NavbarDropdown } from "../NavbarDropdown";
import { NavbarLinks } from "../NavbarLinks";
import { NavbarLogo } from "../NavbarLogo";
import { NavbarSandwichButton } from "../NavbarSandwichButton";
import { NavbarSearch } from "../NavbarSearch";
import { NavbarUserMenu } from "../NavbarUserMenu";
import { Container } from "./styles";

export function Navbar() {
  const [isSandwichMenuOpen, setIsSandwichMenuOpen] = useState(true)
  const [isSmallScreen, setIsSmalScreen] = useState(true)
  return (
    <>
      <Container>
        <NavbarLogo isSmallScreen={isSmallScreen} />
        {isSmallScreen ?
          <>
            <NavbarSearch isSmallScreen={isSmallScreen} />
            <NavbarSandwichButton
              isSandwichMenuOpen={isSandwichMenuOpen}
              setIsSandwichMenuOpen={setIsSandwichMenuOpen}
            />
          </>
          :
          <>
            <NavbarLinks />
            <NavbarSearch isSmallScreen={isSmallScreen} />
            <NavbarUserMenu />
          </>
        }

      </Container>
      {(isSandwichMenuOpen) && <NavbarDropdown />}

    </>
  );
};

