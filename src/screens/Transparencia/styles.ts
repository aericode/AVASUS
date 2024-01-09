import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 30px;
  margin-bottom: 190px;
`;

export const Wrapper = styled.div`
  width: 80vw;
  max-width: 1110px;
`;

export const BreadcrumbContainer = styled.div`
`;

export const StyledTitle = styled.h2`
  color: ${({ theme }) => theme.COLORS.RED_500};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL3};
  margin: 30px 0;
  text-align: center;
`;
