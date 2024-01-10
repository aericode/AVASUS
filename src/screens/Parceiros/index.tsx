import { PaginationPageDisplay } from '../../components/PaginationPageDisplay';
import { DefaultBreadcrumbText } from '../../components/DefaultBreadcrumbText';
import { Container, Wrapper } from './styles';
import { useContext } from 'react';
import { DataContext } from '../../contexts/DataContext';
import { PartnerCard } from '../../components/PartnerCard';


export function Parceiros() {
  const { parceirosData } = useContext(DataContext)!;

  return (
    <>
      <Wrapper>

        <div>
          <DefaultBreadcrumbText isRoot text={'Início'} />
          <DefaultBreadcrumbText isRoot={false} text={' / Parceiros'} />
        </div>
        {
          parceirosData ?
            <PaginationPageDisplay>
              <PartnerCard parceiro={parceirosData[0]} />
              <PartnerCard parceiro={parceirosData[1]} />
              <PartnerCard parceiro={parceirosData[2]} />
            </PaginationPageDisplay>
            :
            <></>
        }

      </Wrapper>
    </>
  );
}