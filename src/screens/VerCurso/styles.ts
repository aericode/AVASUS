import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Wrapper = styled.div`
  max-width: 1110px;
  align-self: center;
  padding: 0 15px;
      
`;

export const BannerImageContainer = styled.div`
  height: 290px;
  width: 100%;
  overflow: hidden;
  filter: blur(4px);
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};

`;

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BannerOverlay = styled.div`
  z-index: 10;
  width: 100%;
  height: 290px;
  background-color: red;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BannerTextWrapper = styled.div`
  z-index: 10;
  width: 80vw;
  max-width: 1110px;
`;

export const BannerBreadcrumbRoot = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.SEMIBOLD};
  display: inline;
`;

export const BannerBreadcrumbCourseName = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  display: inline;

`;

export const CourseName = styled.h2`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL3};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};   
  color: ${({ theme }) => theme.COLORS.WHITE};

  margin-top: 60px;
  margin-bottom: 30px;
`;

export const Partners = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.SEMIBOLD};   
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const SectionName = styled.h2`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL3};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.SEMIBOLD};   
  color: ${({ theme }) => theme.COLORS.RED_500};

  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;

`;

export const IconBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px 0;
  margin-right: 20px;
`;

export const IconLabel = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};   
  color: ${({ theme }) => theme.COLORS.GRAY_800};
  margin-left: 6px;
  cursor: default;
`;

export const InfoHeader = styled.h4`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.SEMIBOLD};   
  color: ${({ theme }) => theme.COLORS.RED_500};
  text-align: center;
  margin-bottom: 30px;


`;

export const CourseTextHeader = styled.h5`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};   
  color: ${({ theme }) => theme.COLORS.BLACK};
  margin-bottom: 13px;
`;

export const CourseText = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.REGULAR};   
  color: ${({ theme }) => theme.COLORS.BLACK};
  line-height: 20px;
  margin-bottom: 30px;
`;