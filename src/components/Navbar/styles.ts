import styled from 'styled-components';

export const Container = styled.nav`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 15px;
  color: #fff;
  box-shadow: 0px 3px 3px 0px rgba(0,0,0,0.15);

  height: 40px;
  max-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

interface WrapperProps {
  isSmallScreen: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  
  display: flex;
  justify-content: space-around;
  width: ${({ isSmallScreen }) => (isSmallScreen ? '100vw' : 'fit-content')};
`
