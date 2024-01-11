import styled from "styled-components";

type ScreenProps = {
  isSmallScreen: boolean
}

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.RED_500};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px;
`

export const Logo = styled.img`
  display: inline-block;
  height: auto;
  width: 200px;
  padding: 15px;
`;


export const Wrapper = styled.div<ScreenProps>`
  width: fit-content;
  display: flex;
  flex-direction: ${({ isSmallScreen }) => isSmallScreen ? 'column' : 'row'};
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

export const StyledText = styled.p`
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.SEMIBOLD};
  color:  ${({ theme }) => theme.COLORS.WHITE};
  size: ${({ theme }) => theme.FONT_SIZE.XL};

  margin-bottom: 15px;
`