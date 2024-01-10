import { PaginationPageDisplay } from '../../components/PaginationPageDisplay';
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
      <PaginationPageDisplay>
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
      </PaginationPageDisplay>
      </Wrapper>
    </Container>
  );
}