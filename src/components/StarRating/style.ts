import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   align-items: center;
`;

interface NumberRatingProps {
  fontSize: number,
  isBold?: boolean
}

export const NumberRating = styled.p<NumberRatingProps>`
  font-size: ${({ fontSize }) => fontSize + 'px'};
  color: ${({ theme }) => theme.COLORS.GRAY_800};
  font-weight: ${({ theme, isBold }) => isBold ? theme.FONT_WEIGHT.BOLD : theme.FONT_WEIGHT.REGULAR };
  margin-left: 4px;
`;