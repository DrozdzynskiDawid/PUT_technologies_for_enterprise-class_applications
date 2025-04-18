import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from "react";
import axios from "axios";

function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/movies/${id}`)
            .then(response => setMovie(response.data))
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

    return (
        <div className="w-50 mx-auto my-4">
            <h2>Movie Details</h2>
            <Card className="bgColor">
                <Card.Body>
                    <Card.Title className="fs-1 mx-auto">{movie.title}</Card.Title>
                    <Card.Text className="mt-5"><b>Genre: </b>{movie.genre}</Card.Text>
                    <Card.Text><b>Release year: </b>{movie.releaseYear}</Card.Text>
                    <Card.Text><b>Plot description: </b>{movie.plotDescription}</Card.Text>
                    <Card.Text><b>Price: </b>{movie.price}$</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default MovieDetails;