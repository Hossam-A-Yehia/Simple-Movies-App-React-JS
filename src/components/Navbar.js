import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux'
import img from "../images/logo-no-background.png"
import { getAllMovies, searchMovies } from '../reduxToolkit/MoviesSlice'

function Navbar() {

    const dispatch = useDispatch()

    const onSearch = (e) => {
        if (e === "") {
            dispatch(getAllMovies())

        } else {

            dispatch(searchMovies(e))
        }
    }
    const { erorr } = useSelector(state => state.moviesSlice)

    return (
        <div className='nav w-100 p-3'>
            <Container>
                <Row className="">
                    {erorr && <div className="alert alert-danger mb-0" role="alert">
                        {erorr}
                    </div>}
                    <Col xs="2" lg="1" className="d-flex justify-content-center align-items-center w-20" >
                        <a href='/'>
                            <img className="logo" src={img} alt='hg' />
                        </a>
                    </Col>
                    <Col>
                        <div className="search">
                            <input type="text" className="form-control" placeholder='ابحث هنا' onChange={(e) => onSearch(e.target.value)} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Navbar