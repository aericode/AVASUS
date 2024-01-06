import styled from "styled-components";


export const DropdownContainer = styled.div`
  position: absolute;
  z-index: 10000;

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
  padding: 8px 12px;
  width: auto;
  cursor: pointer;
  border-bottom:  1px solid  ${({ theme }) => theme.COLORS.GRAY_150};
  text-align: center;
  

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.GRAY_50};
  }
`;