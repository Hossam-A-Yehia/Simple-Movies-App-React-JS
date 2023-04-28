import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getAllMovies = createAsyncThunk("movies/getAllMovies", async (_, thunkAPT) => {
    const { rejectWithValue } = thunkAPT
    try {
        const res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=5cbe6922781890ae984d75eed8341dd8&language=ar")
        const data = await res.json()
        return data
    } catch (erorr) {
        return rejectWithValue(erorr.message)
    }
})


export const searchMovies = createAsyncThunk("movies/searchMovies", async (char, thunkAPT) => {
    const { rejectWithValue } = thunkAPT
    try {
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=5cbe6922781890ae984d75eed8341dd8&language=en-US&query=${char}&page=1&include_adult=false`)
        const data = await res.json()
        return data
    } catch (erorr) {
        return rejectWithValue(erorr.message)
    }
})


export const getPageMovie = createAsyncThunk("movies/getPageMovie", async (num, thunkAPT) => {
    const { rejectWithValue } = thunkAPT
    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=5cbe6922781890ae984d75eed8341dd8&language=ar&page=${num}`)
        const data = await res.json()
        return data
    } catch (erorr) {
        return rejectWithValue(erorr.message)
    }
})


export const getMoviesDetails = createAsyncThunk("movies/getMoviesDetails", async (id, thunkAPT) => {
    const { rejectWithValue } = thunkAPT
    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=5cbe6922781890ae984d75eed8341dd8&language=ar`)
        const data = await res.json()
        return data
    } catch (erorr) {
        return rejectWithValue(erorr.message)
    }
})


const moviesSlice = createSlice({
    name: "movies",
    initialState: { movies: [], isLoading: false, erorr: null, },
    extraReducers: {
        // getAllMovies
        [getAllMovies.pending]: (state, action) => {
            state.isLoading = true
        },
        [getAllMovies.fulfilled]: (state, action) => {
            state.isLoading = false
            state.movies = action.payload.results

        },
        [getAllMovies.rejected]: (state, action) => {
            state.isLoading = false
            state.erorr = action.payload

        },
        // getAllMovies
        [searchMovies.pending]: (state, action) => {
            state.isLoading = true

        },
        [searchMovies.fulfilled]: (state, action) => {
            state.isLoading = false
            state.movies = action.payload.results


        },
        [searchMovies.rejected]: (state, action) => {
            state.isLoading = false
            state.erorr = action.payload

        },
        // getPageMovie
        [getPageMovie.pending]: (state, action) => {
            state.isLoading = true

        },
        [getPageMovie.fulfilled]: (state, action) => {
            state.isLoading = false
            state.movies = action.payload.results
        },
        [getPageMovie.rejected]: (state, action) => {
            state.isLoading = false
            state.erorr = action.payload
        },

        // getPageMovie
        [getMoviesDetails.pending]: (state, action) => {
            state.isLoading = true

        },
        [getMoviesDetails.fulfilled]: (state, action) => {
            state.isLoading = false
            state.movies = action.payload.results
        },
        [getMoviesDetails.rejected]: (state, action) => {
            state.isLoading = false
            state.erorr = action.payload
        },
    }
})

export default moviesSlice.reducer