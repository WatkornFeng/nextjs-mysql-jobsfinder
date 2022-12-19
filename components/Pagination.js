const Pagination = ({ totalPages, setCurrentPage, currentPage, setItemId }) => {
  let pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  const paginationOnclick = (page) => {
    setCurrentPage(page);
    setItemId(0);
  };

  return (
    <>
      <div className="pagination">
        {pages.map((page, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                paginationOnclick(page);
              }}
              className={page === currentPage ? "active" : ""}
            >
              {page}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Pagination;
