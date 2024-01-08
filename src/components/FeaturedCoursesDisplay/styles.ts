import styled from 'styled-components';

export const Container = styled.div`

`;

export const StyledTitle = styled.h1`
  text-align: center;
  color:  ${({ theme }) => theme.COLORS.RED_500};
  font-size:  ${({ theme }) => theme.FONT_SIZE.XL2};
  font-weight:  ${({ theme }) => theme.FONT_WEIGHT.SEMIBOLD};
`;