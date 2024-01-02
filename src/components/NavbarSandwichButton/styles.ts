import styled from 'styled-components';

export const SandwichButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  min-width: 45px;
  border: 1px solid  ${({ theme }) => theme.COLORS.GRAY_100};
  
  border-radius: 4px;
  background-color: ${({ theme }) => theme.COLORS.SILVER};
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &:hover{
    background-color: ${({ theme }) => theme.COLORS.GRAY_50};
  }
`;