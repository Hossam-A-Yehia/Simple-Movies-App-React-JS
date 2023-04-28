import React from 'react'
import ReactPagination from 'react-paginate'
import { useDispatch } from 'react-redux'
import { getPageMovie } from '../reduxToolkit/MoviesSlice'

function PaginationComp() {
    const dispatch = useDispatch()
    const handlePageChange = (data) => {
        dispatch(getPageMovie(data.selected + 1))
    }
    const pageCount = 500
    return (
        <ReactPagination
            breakLabel="..."
            nextLabel="التالي"
            onPageChange={handlePageChange}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            previousLabel="السابق"
            containerClassName={"pagination justify-content-center p-3"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            nextClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
        />
    )
}

export default PaginationComp