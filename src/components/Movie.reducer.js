import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { serviceMovie } from "../services/service";

const initialState = {
        MovieData: [],
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
    //     const params = new URLSearchParams({
    //         apikey: "9c7bdb5a",
    //         s: title
    //     })

    //     const baseUrl = `https://www.omdbapi.com/?${params}`

    //     const response = await axios.get(baseUrl)
    //     if (response.error !== null) {
    //         return response.data
    //     }
    //     return rejectWithValue(response.error)
    },
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    extraReducers: (builder) => {
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
        })
    },
    reducers: {
        setMovie: (state, {payload}) => {
            state.MovieData = payload;
        }
    }
})

export const {
    setMovie,
} = movieSlice.actions;

export default movieSlice.reducer