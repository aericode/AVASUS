import styled from "styled-components";


export const RootText = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  color: ${({ theme }) => theme.COLORS.GRAY_190 };
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.SEMIBOLD};
  display: inline;
`;

export const CurrentPageText = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.SEMIBOLD};
  display: inline;
`;

export const Container = styled.div`

`;