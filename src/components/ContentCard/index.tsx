import { ReactNode } from "react";
import { Container } from "./styles";

interface ContentCardProps {
  children: ReactNode;
}

export function ContentCard({ children }: ContentCardProps) {
  return(
    <Container>
      {children}
    </Container>
  )
}