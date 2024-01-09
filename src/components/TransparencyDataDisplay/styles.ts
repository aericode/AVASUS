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
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export const DataBlock = styled.div`
`

export const DataName = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_800};

`

export const DataDisplay = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL2};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.SEMIBOLD};
  color: ${({ theme }) => theme.COLORS.RED_500};
`