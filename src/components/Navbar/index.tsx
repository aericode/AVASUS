import { useEffect, useState } from "react";
import { NavbarDropdown } from "../NavbarDropdown";
import { NavbarLinks } from "../NavbarLinks";
import { NavbarLogo } from "../NavbarLogo";
import { NavbarSandwichButton } from "../NavbarSandwichButton";
import { NavbarSearch } from "../NavbarSearch";
import { NavbarUserMenu } from "../NavbarUserMenu";
import { Container, Wrapper } from "./styles";
import { useScreen } from "../../contexts/ScreenSizeContext";

export function Navbar() {
  const [isSandwichMenuOpen, setIsSandwichMenuOpen] = useState(true)

  const { isSmallScreen } = useScreen();

  useEffect(() => {
    setIsSandwichMenuOpen(false)
  }, [isSmallScreen]);
  
  return (
    <>
      <Container>
        <Wrapper isSmallScreen={isSmallScreen}>

          <NavbarLogo />
          {isSmallScreen ?
            <>
              <NavbarSearch />
              <NavbarSandwichButton
                isSandwichMenuOpen={isSandwichMenuOpen}
                setIsSandwichMenuOpen={setIsSandwichMenuOpen}
              />
            </>
            :
            <>
              <NavbarLinks />
              <NavbarSearch />
              <NavbarUserMenu />
            </>
          }

        </Wrapper>
      </Container>
      {(isSmallScreen && isSandwichMenuOpen) && <NavbarDropdown />}

    </>
  );
};

