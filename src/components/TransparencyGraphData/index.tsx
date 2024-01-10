import React, { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import { Container, StyledText, TextContainer, Wrapper } from "./styles";
import { Transparencia } from "../../types/transparencia";
import { theme } from "../../theme";

export function TransparencyGraphData() {
  const { transparenciaData } = useContext(DataContext)!;
  function getMarkupColor(index: number) {
    const colorArray = [theme.COLORS.WHITE, theme.COLORS.RED_300, theme.COLORS.GRAY_200, theme.COLORS.GRAY_800]

    return colorArray[index] || theme.COLORS.BLACK
  }

  return (
    <Container>
      <Wrapper>
        {transparenciaData &&
          transparenciaData.usuarios_por_curso.map((item, index) => (
            <TextContainer key={index}>
              <StyledText>{item.curso}:&nbsp;</StyledText>
              <StyledText>{item.usuarios}</StyledText>
            </TextContainer>
          ))}
      </Wrapper>
    </Container>
  )
}