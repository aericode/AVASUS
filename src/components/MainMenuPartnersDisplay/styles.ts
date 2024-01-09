import styled from 'styled-components';

export const Container = styled.div`
   width: 80vw;
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


export const PartnerList = styled.div`
  display: flex;
  flex-direction: column;
`
export const PartnerBlock = styled.div`
  display: flex;
  flex-direction: row;
`

export const PartnerTitle = styled.h3`
  display: flex;
  flex-direction: column;
`

export const PartnerName = styled.p`
  display: flex;
  flex-direction: column;
`