import "./Pagination.css";

const Pagination = ({ currentPage, itemPerPage, count, setCurrentPage }) => {
  const numberOfPages = Math.ceil(count / itemPerPage);
  const pages = [...Array(numberOfPages).keys()].map((page) => page + 1); // Adjust page numbers to start from 1
  // const pages = [...Array(numberOfPages).keys()]; // Adjust page numbers to start from 1

  const handleItemsPerPage = (e) => {
    const selectedPage = parseInt(e.target.value);
    setCurrentPage(selectedPage);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      // Adjust condition to prevent going to negative pages
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < numberOfPages) {
      // Adjust condition to prevent going beyond total pages
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div className="pagination">
      <p>{currentPage}</p>
      <button onClick={handlePrevPage}>Prev</button>
      {pages?.map((page) => (
        <button
          className={currentPage === page ? "selected" : undefined}
          onClick={() => setCurrentPage(page)}
          key={page}
        >
          {page}
        </button>
      ))}
      <button onClick={handleNextPage}>Next</button>
      <select value={currentPage} onChange={handleItemsPerPage}>
        {pages?.map((page) => (
          <option key={page} value={page}>
            {page}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Pagination;
