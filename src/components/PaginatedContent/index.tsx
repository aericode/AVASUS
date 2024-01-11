import { PaginationPageDisplay } from '../../components/PaginationPageDisplay';
import { Container, PageWrapper, PaginateContainer, ResultCountText } from './styles';
import { useEffect, useState } from 'react';
import { PartnerCard } from '../../components/PartnerCard';
import { Parceiro } from '../../types/parceiro';
import ReactPaginate from 'react-paginate';
import { Curso } from '../../types/curso';

interface PaginatedContentProps {
  contentArray?: Parceiro[] | Curso[]
}


export function PaginatedContent({contentArray}: PaginatedContentProps) {

  const itemsPerPage = 6

  const [currentItems, setCurrentItems] = useState<Parceiro[]|Curso[]>();
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(contentArray ? contentArray!.slice(itemOffset, endOffset) : []);
    setPageCount(Math.ceil(contentArray ? contentArray!.length / itemsPerPage : 0));
  }, [itemOffset, itemsPerPage, contentArray]);

  const handlePageClick = (event: any) => {
    const newOffset = event.selected * itemsPerPage % contentArray!.length;
    setItemOffset(newOffset);
  };

  function isParceiro(item: any): item is Parceiro {
    return typeof item === 'object' && 'specificProperty' in item;
  }

  function isCurso(item: any): item is Curso {
    return typeof item === 'object' && 'specificProperty' in item;
  }

  return (
    <Container>
        <ResultCountText>{ `${currentItems?.length} de  ${contentArray?.length} resultados` }</ResultCountText>
        <PageWrapper>
          <PaginationPageDisplay>
            {currentItems && currentItems.map((contentItem, index) => (
              isParceiro(contentItem) && (<PartnerCard key={index} parceiro={contentItem} />
              )
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
    </Container>
  );
}