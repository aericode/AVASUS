import styled from "styled-components";

export const Container = styled.div`
  height: 170px;
  background-color: ${({ theme }) => theme.COLORS.RED_500};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Logo = styled.img`
  display: inline-block;
  height: 55px;
  width: auto;
`;


export const Wrapper = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StyledText = styled.p`
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.SEMIBOLD};
  color:  ${({ theme }) => theme.COLORS.WHITE};
  font-family: 'Montserrat', sans-serif;
  size: ${({ theme }) => theme.FONT_SIZE.XL};

  margin-bottom: 20px;
`