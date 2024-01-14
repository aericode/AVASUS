import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import { ContentCard } from "../ContentCard";
import { ResponsiveFlexWrapper } from "../ResponsiveFlexWrapper";
import { Container, DataBlock, DataDisplay, DataHeaderWrapper, DataName, StyledTitle, LineWrapper, CardPadding } from "./styles";
import { StyledIcon } from "../StyledIcon";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { addDotsToNumber } from "../../utils/addDotsToNumber";

export function TransparencyDataDisplay() {
  const { transparenciaData } = useContext(DataContext)!;

  return (
    <Container>
      <ContentCard>
        <CardPadding>
          <StyledTitle>Dados Gerais</StyledTitle>
          <ResponsiveFlexWrapper>
            <LineWrapper>
              <DataBlock>
                <DataHeaderWrapper>
                  <StyledIcon icon={faUserGroup} iconSize={20}/>
                  <DataName>Total de usuários registrados</DataName>
                </DataHeaderWrapper>
                <DataDisplay>{transparenciaData && addDotsToNumber(transparenciaData!.dados_gerais.usuarios_registrados)}</DataDisplay>
              </DataBlock>
              <DataBlock>
                <DataHeaderWrapper>
                  <StyledIcon icon={faUserGroup} iconSize={20}/>
                  <DataName>Inscrições realizadas</DataName>
                </DataHeaderWrapper>
                <DataDisplay>{transparenciaData && addDotsToNumber(transparenciaData!.dados_gerais.incricoes_realizadas)}</DataDisplay>
              </DataBlock>
              <DataBlock>
                <DataHeaderWrapper>
                  <StyledIcon icon={faUserGroup} iconSize={20}/>
                  <DataName>Cursos ativos</DataName>
                </DataHeaderWrapper>
                <DataDisplay>{transparenciaData && addDotsToNumber(transparenciaData!.dados_gerais.cursos_ativos)}</DataDisplay>
              </DataBlock>
              <DataBlock>
                <DataHeaderWrapper>
                  <StyledIcon icon={faUserGroup} iconSize={20}/>
                  <DataName>Direito à Certificação</DataName>
                </DataHeaderWrapper>
                <DataDisplay>{transparenciaData && transparenciaData!.dados_gerais.direito_certificacao}</DataDisplay>
              </DataBlock>
            </LineWrapper>
          </ResponsiveFlexWrapper>
          <ResponsiveFlexWrapper>
            <LineWrapper>
              <DataBlock>
                <DataHeaderWrapper>
                  <StyledIcon icon={faUserGroup} iconSize={20}/>
                  <DataName>Investimento médio por curso</DataName>
                </DataHeaderWrapper>
                <DataDisplay>{transparenciaData && transparenciaData!.dados_gerais.investimento_medio_curso}</DataDisplay>
              </DataBlock>
              <DataBlock>
                <DataHeaderWrapper>
                  <StyledIcon icon={faUserGroup}  iconSize={20}/>
                  <DataName>Investimento médio por aluno</DataName>
                </DataHeaderWrapper>
                <DataDisplay>{transparenciaData && transparenciaData!.dados_gerais.investimento_medio_aluno}</DataDisplay>
              </DataBlock>
            </LineWrapper>
          </ResponsiveFlexWrapper>
        </CardPadding>
      </ContentCard>
    </Container>
  )
}