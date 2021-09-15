import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap"

const MovieList = ({ data }) => {
    return (
        <div className="row">
            {data.map((data, i) => (
                <div className="col" key={i}>
                    <Card>
                        <CardImg top width="100%" src={data.Poster} alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5">{data.Title}</CardTitle>
                            <CardTitle tag="h5">{data.Genre}</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">{data.Year}</CardSubtitle>
                        </CardBody>
                    </Card>
                </div>
            ))}
        </div>
    )
}

export default MovieList
