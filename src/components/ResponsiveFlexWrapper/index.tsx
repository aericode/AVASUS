import React, { ReactNode, HTMLAttributes } from 'react';
import { useScreen } from '../../contexts/ScreenSizeContext';
import { Wrapper } from './styles';

interface ResponsiveFlexWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function ResponsiveFlexWrapper({ children, ...rest }:ResponsiveFlexWrapperProps){
  const { isSmallScreen } = useScreen();

  return (
    <Wrapper isSmallScreen={isSmallScreen}>
      {children}
    </Wrapper>
  );
};