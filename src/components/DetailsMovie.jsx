/* eslint-disable jsx-a11y/alt-text */
import { } from "reactstrap"
import { useSelector } from "react-redux"

const DetailsMovie = () => {
    const data = useSelector((state)=> state.movie.DetailsMovie)
    return (
        <div>
            <img src={data.Poster} />
            <div className="container">
                <h1>{data.Title}</h1>
                <h4>{data.Genre}</h4>
                <h4>{data.Released}</h4>
            </div>
        </div>
    )
}

export default DetailsMovie
