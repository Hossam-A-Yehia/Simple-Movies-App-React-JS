import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import "./App.css"
import { Container } from "react-bootstrap"
import MoviesList from "./components/MoviesList"
import axios from 'axios'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MoviesDetails from './components/MoviesDetails'
import { useDispatch, useSelector } from "react-redux"
import { getAllMovies } from './reduxToolkit/MoviesSlice'

function App() {

    const { isLoading } = useSelector(state => state.moviesSlice)
    const dispatch = useDispatch()
    const [movies, setMovies] = useState([])
    const [pageCount, setPageCount] = useState(0)

    const getPageMovie = async (num) => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5cbe6922781890ae984d75eed8341dd8&language=ar&page=${num}`)
        setMovies(res.data.results)
        setPageCount(res.data.total_pages)

    }
    useEffect(() => {
        dispatch(getAllMovies())
    }, [dispatch])

    return (
        <div>
            <Navbar />
            <Container >
                <BrowserRouter>
                    {isLoading ? "Loading..." : (
                        <Routes>
                            <Route path='/' element={<MoviesList getPageMovie={getPageMovie} pageCount={pageCount} />} />
                            <Route path='/movie/:id' element={<MoviesDetails />} />
                        </Routes>
                    )}
                </BrowserRouter>
            </Container>
        </div>
    )
}

export default App