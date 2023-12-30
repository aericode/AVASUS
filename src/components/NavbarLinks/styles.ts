import styled from "styled-components";

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  margin: 0 10px;

`;

export const NavLink = styled.a`
  text-decoration: none;
  font-weight: 600;
  color: #2F2E41;
  font-family: 'Montserrat', sans-serif;
  size: 20px;
  &:hover {
    text-decoration: none;
    color: #D2202C;
  }
`;
