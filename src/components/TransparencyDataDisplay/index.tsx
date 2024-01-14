import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import { ContentCard } from "../ContentCard";
import { ResponsiveFlexWrapper } from "../ResponsiveFlexWrapper";
import { Container, DataBlock, DataDisplay, DataHeaderWrapper, DataName, StyledTitle, LineWrapper, CardPadding } from "./styles";
import { StyledIcon } from "../StyledIcon";
import { IconDefinition, faAward, faFileArrowUp, faGraduationCap, faUser, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { addDotsToNumber } from "../../utils/addDotsToNumber";

import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface DataDisplayItemProps {
  icon: IconProp,
  dataName: string,
  displayedData?: string
}

function DataDisplayItem({ icon, dataName, displayedData }: DataDisplayItemProps) {
  return (
    <DataBlock>
      <DataHeaderWrapper>
        <StyledIcon icon={icon} iconSize={20} />
        <DataName>{dataName}</DataName>
      </DataHeaderWrapper>
      <DataDisplay>{displayedData || ''}</DataDisplay>
    </DataBlock>
  )
}

export function TransparencyDataDisplay() {
  const { transparenciaData } = useContext(DataContext)!;

  return (
    <Container>
      <ContentCard>
        <CardPadding>
          <StyledTitle>Dados Gerais</StyledTitle>
          <ResponsiveFlexWrapper>
            <LineWrapper>
              <DataBlock
                icon={faUserGroup}
                dataName={"Total de usuários registrados"}
                displayedData={transparenciaData && addDotsToNumber(transparenciaData!.dados_gerais.usuarios_registrados)}
              />
              <DataBlock
                icon={faFileArrowUp}
                dataName={"Inscrições realizadas"}
                displayedData={transparenciaData && addDotsToNumber(transparenciaData!.dados_gerais.incricoes_realizadas)}
              />
              <DataBlock
                icon={faGraduationCap}
                dataName={"Cursos ativos"}
                displayedData={transparenciaData && addDotsToNumber(transparenciaData!.dados_gerais.cursos_ativos)}
              />
              <DataBlock
                icon={faAward}
                dataName={"Direito à Certificação"}
                displayedData={transparenciaData && transparenciaData!.dados_gerais.direito_certificacao}
              />
            </LineWrapper>
          </ResponsiveFlexWrapper>
          <ResponsiveFlexWrapper>
            <LineWrapper>
              <DataBlock
                icon={faGraduationCap}
                dataName={"Investimento médio por curso"}
                displayedData={transparenciaData && transparenciaData!.dados_gerais.investimento_medio_curso}
              />
              <DataBlock
                icon={faUser}
                dataName={"Investimento médio por aluno"}
                displayedData={transparenciaData && transparenciaData!.dados_gerais.investimento_medio_aluno}
              />
            </LineWrapper>
          </ResponsiveFlexWrapper>
        </CardPadding>
      </ContentCard>
    </Container>
  );
}