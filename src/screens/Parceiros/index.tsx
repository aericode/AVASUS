import { ContentGrid } from '../../components/ContentGrid';
import { DefaultBreadcrumbText } from '../../components/DefaultBreadcrumbText';
import { Container, PartnerCard, Wrapper } from './styles';


export function Parceiros() {
  return (
    <Container>
      <Wrapper>

      <div>
          <DefaultBreadcrumbText isRoot text={'Início'}/>
          <DefaultBreadcrumbText isRoot={false} text={' / Parceiros'}/>
      </div>
      <ContentGrid>
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />

      </ContentGrid>
      </Wrapper>
    </Container>
  );
}