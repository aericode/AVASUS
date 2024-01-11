import { Breadcrumbs } from '../../components/Breadcrumbs';
import { TransparencyDataDisplay } from '../../components/TransparencyDataDisplay';
import { TransparencyGraphSection } from '../../components/TransparencyGraphSection';
import { Container, StyledTitle, Wrapper } from './styles';


export function Transparencia() {
  return (
    <Container>
      <Wrapper>
        <Breadcrumbs rootText={'Início'} currentPageText={' / Transparência'} />
        <StyledTitle>Transparência</StyledTitle>
        <TransparencyDataDisplay/>
        <TransparencyGraphSection/>
      </Wrapper>
    </Container>
  );
}