import ListGroup from 'react-bootstrap/ListGroup';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MoviesList.css';

function MoviesList() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/movies')
            .then(response => setMovies(response.data))
            .catch(error => console.error('Error fetching data: ', error));
    }, []);
    console.log(movies);
    return (
        <div className="fs-5">
            <ListGroup>
                {movies.map((movie, index) => (
                    <ListGroup.Item key={index}>
                        <div><b>{movie.title}</b></div>
                        <div className="d-flex">
                            <p>Genre: {movie.genre}</p>
                            <p>, Release Year: {movie.releaseYear}</p>
                            <p>, Price: {movie.price}$</p>
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
}

export default MoviesList;