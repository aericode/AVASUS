import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  height: 64px;
`

export const StyledText = styled.p`
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};

  text-align: center;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.REGULAR};
  color:  ${({ theme }) => theme.COLORS.WHITE};
  font-family: 'Montserrat', sans-serif;
  size: ${({ theme }) => theme.FONT_SIZE.MD};
  white-space: pre-line;
`