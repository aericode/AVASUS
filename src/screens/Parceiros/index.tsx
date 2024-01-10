import { PaginationPageDisplay } from '../../components/PaginationPageDisplay';
import { DefaultBreadcrumbText } from '../../components/DefaultBreadcrumbText';
import { Container, Wrapper } from './styles';
import { useContext } from 'react';
import { DataContext } from '../../contexts/DataContext';
import { PartnerCard } from '../../components/PartnerCard';


export function Parceiros() {
  const { parceirosData } = useContext(DataContext)!;

  return (
    <Container>
      <Wrapper>

        <div>
          <DefaultBreadcrumbText isRoot text={'Início'} />
          <DefaultBreadcrumbText isRoot={false} text={' / Parceiros'} />
        </div>
        <PaginationPageDisplay>
          {parceirosData ? parceirosData.slice(0,6).map((parceiro) => (
            <PartnerCard parceiro={parceiro} />
          )) : <></>}
        </PaginationPageDisplay>
      </Wrapper>
    </Container>
  );
}