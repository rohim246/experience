import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, FormGroup, Label, Input, Spinner } from "reactstrap";
import MovieList from "./MovieList";
import {getDetailsMovie, getMovie, setDetailsMovie, setMovie} from './Movie.reducer';
import { useHistory } from "react-router-dom";
import { utilsChangeDash } from "../utils/utils";

const Movie = () => {
    const [title, setTitle] = useState("");
    const isLoading = useSelector((state)=> state.movie.loading);
    const movies = useSelector((state)=> state.movie.MovieData);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleTitle = (event) => {
        setTitle(event.target.value)
    }

    const handleSearch = async (event) => {
        event.preventDefault();

        const response = await dispatch(getMovie({title}))
        dispatch(setMovie(response.payload.Search))
    }

    const handleOnClick = async (title) => {

        const response = await dispatch(getDetailsMovie({title}))
        dispatch(setDetailsMovie(response.payload))
        const convertedTitleMovie = utilsChangeDash(response.payload.Title);
        history.push(`/${convertedTitleMovie}`)
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
                {movies && !isLoading && <MovieList data={movies} onClick={handleOnClick}/>}
            </div>
        </div>
    )
}

export default Movie
