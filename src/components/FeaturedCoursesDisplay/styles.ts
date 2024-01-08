import styled from 'styled-components';

export const Container = styled.div`
  height: fit-content;
`;

export const StyledTitle = styled.h1`
  text-align: center;
  color:  ${({ theme }) => theme.COLORS.RED_500};
  font-size:  ${({ theme }) => theme.FONT_SIZE.XL2};
  font-weight:  ${({ theme }) => theme.FONT_WEIGHT.SEMIBOLD};
`;

interface ButtonContainerProps {
  isSmallScreen: boolean;
}

export const ButtonContainer = styled.div<ButtonContainerProps>`
  display: flex;
  margin: 20px 0;
  flex-direction: ${({ isSmallScreen }) => isSmallScreen ? "column": "row"};
`;

interface StyledButtonProps{
  isActive: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  border: none;
  background: none;
  padding: 10px 15px;
  cursor: pointer;
  color:  ${({ isActive, theme }) => isActive ? theme.COLORS.GRAY_200 : theme.COLORS.GRAY_800};

  font-weight:  ${({ theme }) => theme.FONT_WEIGHT.SEMIBOLD};
  font-size:  ${({ theme }) => theme.FONT_SIZE.LG};


  border-bottom : ${({ isActive }) => isActive ? "3px solid" : "0px" };

`;