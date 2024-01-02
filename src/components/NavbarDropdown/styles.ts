import styled from "styled-components";


export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;


interface DropdownListProps {
    isOpen: boolean;
  }
  
export const DropdownList = styled.ul<DropdownListProps>`
  position: absolute;
  top: -20px;

  margin: auto;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 0;
  margin: 0;
  list-style: none;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;



export const DropdownItem = styled.li`
  padding: 8px 12px;
  width: 100vw;
  cursor: pointer;

  text-align: center;

  &:hover {
    background-color: #f5f5f5;
  }
`;