import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   align-items: center;
`;

interface NumberRatingProps {
  fontSize: number
}

export const NumberRating = styled.p<NumberRatingProps>`
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ theme }) => theme.COLORS.GRAY_800};
  margin-left: 4px;
`;