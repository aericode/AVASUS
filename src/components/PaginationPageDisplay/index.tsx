import { ReactNode } from "react";
import { Grid } from "./styles";

interface PaginationPageDisplayProps {
  children: ReactNode;
}

export function PaginationPageDisplay({children}:PaginationPageDisplayProps){
  return <Grid>{children}</Grid>;
}