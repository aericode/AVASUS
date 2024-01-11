import { PaginationPageDisplay } from '../../components/PaginationPageDisplay';
import { DefaultBreadcrumbText } from '../../components/DefaultBreadcrumbText';
import { Container, PageWrapper, PaginateContainer, ResultCountText, Wrapper } from './styles';
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../contexts/DataContext';
import { PartnerCard } from '../../components/PartnerCard';
import { Parceiro } from '../../types/parceiro';
import ReactPaginate from 'react-paginate';


export function Parceiros() {
  const { parceirosData } = useContext(DataContext)!;

  const itemsPerPage = 6

  const [currentItems, setCurrentItems] = useState<Parceiro[]>();
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(parceirosData ? parceirosData!.slice(itemOffset, endOffset) : []);
    setPageCount(Math.ceil(parceirosData ? parceirosData!.length / itemsPerPage : 0));
  }, [itemOffset, itemsPerPage, parceirosData]);

  const handlePageClick = (event: any) => {
    const newOffset = event.selected * itemsPerPage % parceirosData!.length;
    setItemOffset(newOffset);
  };

  return (
    <Container>
      <Wrapper>

        <div>
          <DefaultBreadcrumbText isRoot text={'Início'} />
          <DefaultBreadcrumbText isRoot={false} text={' / Parceiros'} />
        </div>
        <ResultCountText>{ `${currentItems?.length} de  ${parceirosData?.length} resultados` }</ResultCountText>
        <PageWrapper>
          <PaginationPageDisplay>
            {currentItems && currentItems.map((parceiro) => (
              <PartnerCard parceiro={parceiro} />
            ))}
          </PaginationPageDisplay>
        </PageWrapper>


        <PaginateContainer>
          <ReactPaginate
            breakLabel="..."
            nextLabel="próximo >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< anterior"
            renderOnZeroPageCount={null}
            activeClassName={"active"}
            previousClassName={"previousButton"}
            nextClassName={"nextButton"}
            pageLinkClassName={"pageLink"}
          />
        </PaginateContainer>
      </Wrapper>
    </Container>
  );
}