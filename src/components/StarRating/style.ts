import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   align-items: center;
`;

export const NumberRating = styled.p`
font-size: ${({ theme }) => theme.COLORS.GRAY_SM};
  color: ${({ theme }) => theme.COLORS.GRAY_800};
  margin-left: 3px;
  font-family: 'Montserrat', sans-serif;
`;