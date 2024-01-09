import { DefaultBreadcrumbText } from '../../components/DefaultBreadcrumbText';
import { BreadcrumbContainer, Container, Wrapper } from './styles';


export function Transparencia() {
  return (
    <Container>
      <Wrapper>
        <BreadcrumbContainer>
          <DefaultBreadcrumbText isRoot text={'Início'}/>
          <DefaultBreadcrumbText isRoot={false} text={' / Transparência'}/>
        </BreadcrumbContainer>

      </Wrapper>

    </Container>
  );
}