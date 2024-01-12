import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Container, PaginationWrapper, StyledHeader, Wrapper } from './styles';
import { useContext } from 'react';
import { DataContext } from '../../contexts/DataContext';
import { PaginatedContent } from '../../components/PaginatedContent';
import { FilterSelector } from '../../components/FilterSelector';


export function Cursos() {
  const { cursosData } = useContext(DataContext)!;


  return (
    <Container>
      <Wrapper>
        <Breadcrumbs rootText={'Início / Cursos /'} currentPageText={' Módulos'} />
        <StyledHeader>Módulos Educacionais</StyledHeader>
        <FilterSelector />
        <PaginationWrapper>
          <PaginatedContent paginationObjectType={'curso'} contentArray={cursosData} />
        </PaginationWrapper>
      </Wrapper>
    </Container>
  );
}