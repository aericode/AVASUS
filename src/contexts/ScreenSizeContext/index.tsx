import React, { createContext, useContext, useState, useEffect, ReactNode, FC } from 'react';

type ThemeContextProps = {
  children: ReactNode;
};

interface ScreenContextProps {
  isSmallScreen: boolean;
  setIsSmallScreen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ScreenContext = createContext<ScreenContextProps | undefined>(undefined);

export const ScreenProvider: FC<ThemeContextProps> = ({ children }) => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1350);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const contextValue: ScreenContextProps = {
    isSmallScreen,
    setIsSmallScreen,
  };

  return (
    <ScreenContext.Provider value={contextValue}>
      {children}
    </ScreenContext.Provider>
  );
};

export const useScreen = (): ScreenContextProps => {
  const context = useContext(ScreenContext);

  if (!context) {
    throw new Error('useScreen must be used within a ScreenProvider');
  }

  return context;
};