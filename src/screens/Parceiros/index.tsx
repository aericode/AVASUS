import { PaginationPageDisplay } from '../../components/PaginationPageDisplay';
import { DefaultBreadcrumbText } from '../../components/DefaultBreadcrumbText';
import { Container, PageWrapper, PaginateContainer, ResultCountText, Wrapper } from './styles';
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../contexts/DataContext';
import { PartnerCard } from '../../components/PartnerCard';
import { Parceiro } from '../../types/parceiro';
import ReactPaginate from 'react-paginate';
import { PaginatedContent } from '../../components/PaginatedContent';


export function Parceiros() {
  const { parceirosData } = useContext(DataContext)!;


  return (
    <Container>
      <Wrapper>

        <div>
          <DefaultBreadcrumbText isRoot text={'Início'} />
          <DefaultBreadcrumbText isRoot={false} text={' / Parceiros'} />
        </div>
        <PaginatedContent paginationObjectType={'parceiro'} contentArray={parceirosData} />
      </Wrapper>
    </Container>
  );
}