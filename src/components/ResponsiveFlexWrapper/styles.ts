import styled from 'styled-components';

interface WrapperProps {
  isSmallScreen: boolean
}


export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: ${({ isSmallScreen }) => (isSmallScreen ? 'column' : 'row')};
  justify-content: center;
  align-items: center;
`;