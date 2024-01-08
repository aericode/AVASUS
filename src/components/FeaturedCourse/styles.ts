import styled from 'styled-components';

export const Wrapper = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   
   width: 80vw;
   max-width: 1100px;
`;

export const Thumbnail = styled.img`
   width: 120px;
  height: 120px;
  border-radius: 20px;
  object-fit: cover;
`;

export const TextWrapper = styled.div`
   display: flex;
   flex-direction: column;
   max-width: 280px;
   height: 100px;
   justify-content: space-evenly;
   padding: 0 10px;
`;

export const CourseTitle = styled.h1`
   font-weight: ${({ theme }) => theme.FONT_WEIGHT.SEMIBOLD};
   font-size: ${({ theme }) => theme.FONT_SIZE.LG};
   color: ${({ theme }) => theme.COLORS.GRAY_800};
   font-family: 'Montserrat', sans-serif;

`;

export const CoursePartners = styled.p`
   font-weight: ${({ theme }) => theme.FONT_WEIGHT.SEMIBOLD};
   font-size: ${({ theme }) => theme.FONT_SIZE.XSM};
   color: ${({ theme }) => theme.COLORS.RED_300};
   font-family: 'Montserrat', sans-serif;

`;

export const InfoWrapper = styled.div`
   display: flex;
   flex-direction: row;
   max-width: 280px;
   height: 100px;
   justify-content: space-evenly;
   padding: 0 10px;
`;