import styled from 'styled-components';

export const Container = styled.div`
   width: auto;
`;

export const StyledTitle = styled.h3`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  color: ${({ theme }) => theme.COLORS.RED_500};
  text-align: center;
`