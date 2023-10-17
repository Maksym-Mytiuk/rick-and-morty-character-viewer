import ReactPaginate from 'react-paginate';
import { PaginationWrapper } from './Pagination.styled';

type Props = {
  pageCount: number;
  forcePage: number;
  onPageChange: ({ selected }: { selected: number }) => void;
};

export default function Pagination({ pageCount, forcePage, onPageChange }: Props) {
  return (
    <PaginationWrapper>
      <ReactPaginate
        className="pagination"
        breakLabel="..."
        nextLabel=">"
        onPageChange={onPageChange}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        forcePage={forcePage}
      />
    </PaginationWrapper>
  );
}
