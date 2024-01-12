import styled from 'styled-components';

export const Container = styled.div`
   
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
`;

export const IconLabel = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.SEMIBOLD};   
  color: ${({ theme }) => theme.COLORS.GRAY_800};
`;

export const InfoHeader = styled.h4`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.SEMIBOLD};   
  color: ${({ theme }) => theme.COLORS.RED_500};
`;

export const CourseTextHeader = styled.h5`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};   
  color: ${({ theme }) => theme.COLORS.BLACK};
`;

export const CourseText = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.REGULAR};   
  color: ${({ theme }) => theme.COLORS.BLACK};
`;