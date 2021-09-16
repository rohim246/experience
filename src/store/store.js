import { configureStore } from "@reduxjs/toolkit";
import movieReducer from '../components/Movie.reducer'
import { connectRouter } from "connected-react-router";
import history from "../history/history";

const store = configureStore ({
    reducer: {
        movie:movieReducer,
        router: connectRouter(history),
    }
})

export default store
