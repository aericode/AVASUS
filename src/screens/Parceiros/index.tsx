import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Container, PaginationWrapper, StyledHeader, Wrapper } from './styles';
import { useContext } from 'react';
import { DataContext } from '../../contexts/DataContext';
import { PaginatedContent } from '../../components/PaginatedContent';


export function Parceiros() {
  const { parceirosData } = useContext(DataContext)!;


  return (
    <Container>
      <Wrapper>
        <Breadcrumbs rootText={'Início'} currentPageText={' / Parceiros'} />
        <StyledHeader>Nossos parceiros</StyledHeader>
        <PaginationWrapper>
          <PaginatedContent paginationObjectType={'parceiro'} contentArray={parceirosData} />
        </PaginationWrapper>
      </Wrapper>
    </Container>
  );
}