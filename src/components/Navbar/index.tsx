import { NavbarLogo } from "../NavbarLogo";
import { NavItem, NavLink, NavList, NavbarContainer } from "./style";

export function Navbar(){
    return (
      <NavbarContainer>
        <NavbarLogo/>
        <NavList>
          <NavItem>
            <NavLink href="#">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Services</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Contact</NavLink>
          </NavItem>
        </NavList>
      </NavbarContainer>
    );
  };

