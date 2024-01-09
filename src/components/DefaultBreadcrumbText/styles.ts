import styled from "styled-components";

interface BreadcrumbProps{
  isRoot: boolean
}

export const Breadcrumb = styled.p<BreadcrumbProps>`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  color: ${({ theme, isRoot }) => isRoot ? theme.COLORS.GRAY_190 : theme.COLORS.BLACK};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.SEMIBOLD};
  display: inline;
`;