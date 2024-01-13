import styled from "styled-components";

interface ContainerProps{
  isSmallScreen: boolean
}

export const Container = styled.div<ContainerProps>`
  width: auto;
  max-width: 400px;
  margin-bottom: ${({ isSmallScreen }) => isSmallScreen ? '15px' : '0px'};
`;
export const ImageWrapper = styled.div`
  max-width: 350px;
  height: 200px;
  max-height: 200px;
  display: flex;
  margin: 10px;
`;

export const CourseImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 20px;
  object-fit: contain;
`;
export const DataSectionWrapper = styled.div`
  max-width: 350px;
  padding: 0 7px;
`

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  color: ${({ theme }) => theme.COLORS.GRAY_800};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.SEMIBOLD};
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;

  margin: 10px 0;
`;

export const Partners = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.XSM};
  color: ${({ theme }) => theme.COLORS.RED_300};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.SEMIBOLD};
`;

export const IconLabel = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.XSM};
  color: ${({ theme }) => theme.COLORS.GRAY_800};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.REGULAR};

  margin-left: 3px;
`;

export const IconSectionWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`
export const SectionContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin: 5px 0;
margin-right: 10px;
`

export const ResumeText = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.COLORS.GRAY_500};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.MEDIUM};
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  line-clamp: 5;
  -webkit-box-orient: vertical;
`;

export const CourseLinkWrapper = styled.div`
display: flex;
justify-content: flex-end;
`

export const CourseLink = styled.a`
  margin-top: 5px;

  text-decoration: none;
  cursor: pointer;

  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.SEMIBOLD};

  color: ${({ theme }) => theme.COLORS.GRAY_200};


  &:hover {
    color: ${({ theme }) => theme.COLORS.RED_300};
    text-decoration: underline;
  }
`;