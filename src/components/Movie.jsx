import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, FormGroup, Label, Input, Spinner } from "reactstrap";
// import axios from "axios"
import MovieList from "./MovieList";
import {getMovie, setMovie} from './Movie.reducer';


const Movie = () => {
    const [title, setTitle] = useState("")
    // const [movies, setMovies] = useState(null)
    // const [isLoading, setIsLoading] = useState(false)
    const isLoading = useSelector((state)=> state.movie.loading);
    const movies = useSelector((state)=> state.movie.MovieData)

    const dispatch = useDispatch();

    const handleTitle = (event) => {
        setTitle(event.target.value)
    }

    const handleSearch = async (event) => {
        event.preventDefault();

        const response = await dispatch(getMovie({title}))
        dispatch(setMovie(response.payload.Search))
        // setMovies(response)
        // console.log(response.payload.Search)

        // setIsLoading(true)

        // const params = new URLSearchParams({
        //     apikey: "9c7bdb5a",
        //     s: title
        // })

        // const baseUrl = `https://www.omdbapi.com/?${params}`
        // // console.log(baseUrl);

        // try {
        //     const resp = await axios.get(baseUrl)
        //     console.log(resp);

        //     setMovies(resp.data.Search)
        //     setIsLoading(false)

        // } catch (error) {
        //     console.log(error);
        // }
        // console.log(movies);
    }

    return (
        <div 
            style=
            {{
                display:'flex', 
                flexDirection:'row', 
                justifyContent:"center", 
                margin: '3%'
            }}
        >
            <div style=
                {{
                    display: 'flex', 
                    flexDirection:'column', 
                    alignItems:'center'
                }}>
                <h2>Movie</h2>
                <Form onSubmit={handleSearch}>
                    <FormGroup 
                        style =
                            {{
                                display:'flex', 
                                flexDirection: 'column', 
                                alignItems: 'center'
                            }}
                    >
                        <Label for="">Title</Label>
                        <Input type="text" name="title" placeholder=" Search Your Movie Title" onChange={handleTitle} />
                        <Button 
                            type = "submit"
                            style =  
                            {{
                                margin: '10px', 
                                width:'100%', 
                                color:'black', 
                                backgroundColor:'lightskyblue', 
                                border:'none'
                            }}  
                        >
                            Search
                        </Button>
                    </FormGroup>
                    
                </Form>
                <hr />
                {isLoading && <Spinner color="danger" />}
                {movies && !isLoading && <MovieList data={movies} />}
            </div>
        </div>
    )
}

export default Movie
