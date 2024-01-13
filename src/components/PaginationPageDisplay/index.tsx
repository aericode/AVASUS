import { ReactNode } from "react";
import { Grid, List } from "./styles";
import { useScreen } from "../../contexts/ScreenSizeContext";

interface PaginationPageDisplayProps {
  children: ReactNode;
}

export function PaginationPageDisplay({children}:PaginationPageDisplayProps){
  const { isSmallScreen } = useScreen();

  return isSmallScreen ? <List>{children}</List> : <Grid>{children}</Grid>;
}