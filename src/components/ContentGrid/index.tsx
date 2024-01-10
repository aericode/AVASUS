import { ReactNode } from "react";
import { Grid } from "./styles";

interface ContentGridProps {
  children: ReactNode;
}

export function ContentGrid({children}:ContentGridProps){
  return <Grid>{children}</Grid>;
}