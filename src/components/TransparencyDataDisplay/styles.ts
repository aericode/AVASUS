import styled from 'styled-components';

export const Container = styled.div`
   width: auto;
`;

export const StyledTitle = styled.h3`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  color: ${({ theme }) => theme.COLORS.RED_500};
  text-align: center;
  margin-bottom: 30px;
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export const DataBlock = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 20px 20px;
`
export const DataHeaderWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin-bottom: 15px;
width: fit-content;
`

export const LineWrapper = styled.div`
display: flex;
flex-direction: inherit;

`

export const DataName = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_800};
  text-align: center;
  margin-left: 5px;
`

export const DataDisplay = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL2};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.SEMIBOLD};
  color: ${({ theme }) => theme.COLORS.RED_500};
`