import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 30px;
`;

export const Wrapper = styled.div`
  width: 80vw;
  max-width: 1110px;
`;

export const BreadcrumbContainer = styled.div`
`;

export const StiledTitle = styled.h2`
  color: ${({ theme }) => theme.COLORS.RED_500};
`;
