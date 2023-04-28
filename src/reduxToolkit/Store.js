import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./MoviesSlice"

export const store = configureStore({
    reducer: { moviesSlice }
})

