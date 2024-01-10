import styled from 'styled-components';

export const Container = styled.div`
   width: fit-content;
   max-width: 1110px;
   justify-self:center;
   align-items: center;

   margin-top: 94px;
   margin-bottom: 132px;
`;

export const StyledHeader = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.COLORS.RED_500};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL2};
  margin-bottom: 30px;
`

export const PartnerBlock = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 242px;
  margin: 20px 26px;
  
  align-self: flex-start;
`

export const PartnerTitle = styled.h3`
text-align: center;
margin-bottom: 18px;

  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  color:  ${({ theme }) => theme.COLORS.BLACK};
`

export const PartnerName = styled.p`
text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  color:  ${({ theme }) => theme.COLORS.GRAY_200};
`