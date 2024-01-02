import { useEffect, useState } from "react";
import { NavbarDropdown } from "../NavbarDropdown";
import { NavbarLinks } from "../NavbarLinks";
import { NavbarLogo } from "../NavbarLogo";
import { NavbarSandwichButton } from "../NavbarSandwichButton";
import { NavbarSearch } from "../NavbarSearch";
import { NavbarUserMenu } from "../NavbarUserMenu";
import { Container, Wrapper } from "./styles";

export function Navbar() {
  const [isSandwichMenuOpen, setIsSandwichMenuOpen] = useState(true)
  const [isSmallScreen, setIsSmalScreen] = useState(false)

  useEffect(() => {
    setIsSandwichMenuOpen(false)

    const handleResize = () => {
      const isSmall = window.matchMedia('(max-width: 1350px)').matches;
      setIsSmalScreen(isSmall);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setIsSandwichMenuOpen(false)
  }, [isSmallScreen]);
  
  return (
    <>
      <Container>
        <Wrapper isSmallScreen={isSmallScreen}>

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

        </Wrapper>
      </Container>
      {(isSmallScreen && isSandwichMenuOpen) && <NavbarDropdown />}

    </>
  );
};

