import { DefaultBreadcrumbText } from '../../components/DefaultBreadcrumbText';
import { TransparencyDataDisplay } from '../../components/TransparencyDataDisplay';
import { TransparencyGraphs } from '../../components/TransparencyGraphs';
import { BreadcrumbContainer, Container, StyledTitle, Wrapper } from './styles';


export function Transparencia() {
  return (
    <Container>
      <Wrapper>
        <BreadcrumbContainer>
          <DefaultBreadcrumbText isRoot text={'Início'}/>
          <DefaultBreadcrumbText isRoot={false} text={' / Transparência'}/>
        </BreadcrumbContainer>
        <StyledTitle>Transparência</StyledTitle>
        <TransparencyDataDisplay/>
        <TransparencyGraphs/>
      </Wrapper>
    </Container>
  );
}