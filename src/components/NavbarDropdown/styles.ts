import styled from "styled-components";


export const DropdownContainer = styled.div`
  position: fixed;
  z-index: 10000;
  top: 65px;
  width: 100%;
`;


interface DropdownListProps {
    isOpen: boolean;
  }
  
export const DropdownList = styled.ul<DropdownListProps>`
  width: auto;
 
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_150};;
  padding: 0;
  margin: 0;
  list-style: none;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  
`;



export const DropdownItem = styled.li`
  
  width: auto;
  cursor: pointer;
  border-bottom:  1px solid  ${({ theme }) => theme.COLORS.GRAY_150};
  text-align: center;
  padding: 3px;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.GRAY_50};
  }
`;

export const NavLink = styled.a`
padding: 8px 12px;
  white-space: nowrap;
  text-decoration: none;
  width: 100%;
  height: 100%;
  display: block;
  align-self: center;

  color:  ${({ theme }) => theme.COLORS.GRAY_250};
  size: ${({ theme }) => theme.FONT_SIZE.LG};

  &:hover {
    text-decoration: none;
  }
`;