import styled from 'styled-components';

export const Container = styled.div`
   background-color: red;
`;

export const StyledHeader = styled.h2`
  color: ${({ theme }) => theme.COLORS.RED_500};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL2};
`