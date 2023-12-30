import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  background-color: #FFF;
  padding: 15px;
  color: #fff;
  box-shadow: 0px 3px 3px 0px rgba(0,0,0,0.15);

  display: flex;
  justify-content: space-between;
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;

  background-color: red;
`;

export const NavItem = styled.li`
  margin: 0 10px;
  font-family: 'Montserrat', sans-serif;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #fff;
  &:hover {
    text-decoration: underline;
  }
`;
