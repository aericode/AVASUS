import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 90px;
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
  margin-top: 20px;
  margin-bottom: 30px;
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
export const SeeMoreButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const SeeMoreButton = styled.a`
  margin-top: 60px;

  width: 80vw;
  max-width: 350px;

  padding: 10px 35px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.SEMIBOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border: none;
  border-radius: 20px;
  cursor: pointer;
  height: 30px;

  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`;