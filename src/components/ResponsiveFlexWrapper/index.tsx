import { ReactNode } from 'react';
import { useScreen } from '../../contexts/ScreenSizeContext';
import { Wrapper } from './styles';

interface ResponsiveFlexWrapperProps{
  children: ReactNode;
}

export function ResponsiveFlexWrapper({ children }:ResponsiveFlexWrapperProps){
  const { isSmallScreen } = useScreen();

  return (
    <Wrapper isSmallScreen={isSmallScreen}>
      {children}
    </Wrapper>
  );
};