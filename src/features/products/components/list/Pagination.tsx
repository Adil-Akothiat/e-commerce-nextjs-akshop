type PaginationProps = {
  currentPage: number;
  nextPageHandler: () => void;
  previousPageHandler: () => void;
  totalPages: number;
};

const Pagination = ({
  currentPage,
  nextPageHandler,
  previousPageHandler,
  totalPages,
}: PaginationProps) => {
  return (
      <div className="join flex justify-end" id="paginnation">
        <button
          className="join-item btn"
          onClick={previousPageHandler}
          disabled={currentPage <= 1}
        >
          «
        </button>
        <button className="join-item btn">{currentPage} / {totalPages}</button>
        <button
          className="join-item btn"
          onClick={nextPageHandler}
          disabled={currentPage >= totalPages}
        >
          »
        </button>
      </div>
  );
};

export default Pagination;