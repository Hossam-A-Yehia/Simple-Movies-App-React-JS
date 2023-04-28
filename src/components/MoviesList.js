import React from 'react'
import CardMovie from './CardMovie'
import { Row } from "react-bootstrap"
import PaginationComp from './PaginationComp'
import { useSelector } from 'react-redux'

function MoviesList({ getPageMovie, pageCount }) {
    const { movies } = useSelector(state => state.moviesSlice)

    return (
        <Row className='mt-3'>
            {movies ? (
                movies.map(mov => (<CardMovie mov={mov} key={mov.id} />))
            ) : "لا يوجد افلام لعرضها"}
            <PaginationComp getPageMovie={getPageMovie} pageCount={pageCount} />
        </Row>
    )
}

export default MoviesList