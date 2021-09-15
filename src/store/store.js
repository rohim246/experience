import { configureStore } from "@reduxjs/toolkit";
import movieReducer from '../components/Movie.reducer'

const store = configureStore ({
    reducer: {
        movie:movieReducer,
    }
})

export default store
