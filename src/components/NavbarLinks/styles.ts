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
  white-space: nowrap;
  text-decoration: none;
  font-weight: 600;
  color:  ${({ theme }) => theme.COLORS.GRAY_250};
  font-family: 'Montserrat', sans-serif;
  size: 20px;
  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.RED_500};
  }
`;
