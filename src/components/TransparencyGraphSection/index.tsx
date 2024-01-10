import { ResponsiveFlexWrapper } from "../ResponsiveFlexWrapper";
import { Container, Wrapper } from "./styles";

import graphBrazil from '../../assets/transparencyGraphs/graphBrazil.png';
import graphPieChart from '../../assets/transparencyGraphs/graphPieChart.png';
import { TransparencyGraphCard } from "../TransparencyGraphCard";


export function TransparencyGraphSection() {
  return (
    <Container>
      <ResponsiveFlexWrapper>
        <Wrapper>
          <TransparencyGraphCard title={"Usuários por curso"} imageSrc={graphPieChart} />
          <TransparencyGraphCard title={"Usuários por Estado"} imageSrc={graphBrazil} />
        </Wrapper>
      </ResponsiveFlexWrapper>
    </Container>
  )
}