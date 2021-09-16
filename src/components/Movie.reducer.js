import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { serviceMovie, serviceDetailsMovie} from "../services/service";

const initialState = {
        MovieData: [],
        DetailsMovie: [],
        loading: false,
        error: null, 
};

export const getMovie = createAsyncThunk(
    `get/movie`,
    async (payload, {rejectWithValue}) => {
        const { title } = payload;
        const response = await serviceMovie(title)
        if (response.error !==null) {
            return response.data;
        }
        return rejectWithValue(response.error);
    },
);

export const getDetailsMovie = createAsyncThunk(
    `get/detailsMovie`,
    async (payload, {rejectWithValue}) => {
        const { title } = payload;
        const response = await serviceDetailsMovie(title)
        if (response.error !== null) {
            return response.data
        }
        return rejectWithValue(response.error)
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    extraReducers: (builder) => {
        //movie list
        builder.addCase(getMovie.pending, (state)=>{
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getMovie.fulfilled, (state, {payload})=>{
            state.loading = false;
            state.MovieData = payload.data;
        });
        builder.addCase(getMovie.rejected, (state, {payload})=>{
            state.loading = false;
            state.error = payload;
        });
        //details movie
        builder.addCase(getDetailsMovie.pending, (state)=>{
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getDetailsMovie.fulfilled, (state, {payload})=>{
            state.loading = false;
            state.MovieData = payload.data;
        });
        builder.addCase(getDetailsMovie.rejected, (state, {payload})=>{
            state.loading = false;
            state.error = payload;
        });
    },
    reducers: {
        setMovie: (state, {payload}) => {
            state.MovieData = payload;
        },
        setDetailsMovie: (state, {payload}) => {
            state.DetailsMovie = payload
        }
    }
})

export const {
    setMovie,
    setDetailsMovie,
} = movieSlice.actions;

export default movieSlice.reducer