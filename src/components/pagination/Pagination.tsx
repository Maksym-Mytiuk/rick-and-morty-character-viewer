import ReactPaginate from 'react-paginate';
import { PaginationWrapper } from './Pagination.styled';

type Props = {
  pageCount: number;
  onPageChange: ({ selected }: { selected: number }) => void;
};

export default function Pagination({ pageCount, onPageChange }: Props) {
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
      />
    </PaginationWrapper>
  );
}
