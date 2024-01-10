import React, { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import { Container } from "./styles";
import { Transparencia } from "../../types/transparencia";

export function TransparencyGraphData() {
  const { transparenciaData } = useContext(DataContext)!;

  return (
    <Container>
      <p>oi</p>
      {transparenciaData &&
        transparenciaData.usuarios_por_curso.map((item, index) => (
          <React.Fragment key={index}>
            <p>{item.curso}</p>
          </React.Fragment>
        ))}
    </Container>
  )
}