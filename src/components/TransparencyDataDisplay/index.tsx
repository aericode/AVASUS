import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import { ContentCard } from "../ContentCard";
import { ResponsiveFlexWrapper } from "../ResponsiveFlexWrapper";
import { Container, DataBlock, DataDisplay, DataHeaderWrapper, DataName, StyledTitle } from "./styles";
import { StyledIcon } from "../StyledIcon";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";

export function TransparencyDataDisplay(){
  const { transparenciaData } = useContext(DataContext)!;

  return(
    <Container>
      <ContentCard>
        <StyledTitle>Dados Gerais</StyledTitle>
        <ResponsiveFlexWrapper>
          <DataBlock>
            <DataHeaderWrapper>
            <StyledIcon icon={faUserGroup} />
            <DataName>Total de usuários registrados</DataName>
            </DataHeaderWrapper>
            <DataDisplay>{ transparenciaData && transparenciaData!.dados_gerais.usuarios_registrados }</DataDisplay>
          </DataBlock>
        </ResponsiveFlexWrapper>
      </ContentCard>
    </Container>
  )
}