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

    return (
        <div>
            <ListGroup>
                {movies.map((movie, index) => (
                    <ListGroup.Item key={index}>
                        <p><b>{movie.title}</b>, {movie.genre}</p>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
}

export default MoviesList;