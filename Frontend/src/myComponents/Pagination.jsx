import react from 'react';


const Pagination = ({ page, setPage }) => {

    return(
        <div>
            <h1>Pagination</h1>
            <button onClick={() => setPage(page - 1)} disabled={page === 1}>
                Previous
            </button>
            <span>{page}</span>
            <button onClick={() => setPage(page + 1)}>
                Next
            </button>
        </div>
    );
}

export default Pagination;