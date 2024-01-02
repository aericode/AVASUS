import styled from 'styled-components';

export const Container = styled.nav`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 15px;
  color: #fff;
  box-shadow: 0px 3px 3px 0px rgba(0,0,0,0.15);

  display: flex;
  justify-content: space-between;
  height: 40px;
  max-height: 40px;
`;

