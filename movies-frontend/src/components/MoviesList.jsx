import ListGroup from 'react-bootstrap/ListGroup';
import React, { useEffect, useState } from 'react';
import { FaCartPlus } from "react-icons/fa";
import axios from 'axios';
import './MoviesList.css';
import { useNavigate } from "react-router-dom";
import {Button} from "react-bootstrap";

function MoviesList({ selectedGenre }) {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/api/movies')
            .then(response => setMovies(response.data))
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

    const handleClickDetails = (movieId) => {
        navigate(`/details/${movieId}`);
    };

    const filteredMovies = selectedGenre === "Filter By Genre"
        ? movies
        : movies.filter(movie => movie.genre === selectedGenre);

    return (
        <div className="fs-5">
            <ListGroup>
                {filteredMovies.map((movie, index) => (
                    <ListGroup.Item key={index} className="bgColor border-4 my-2 rounded">
                        <div><b>{movie.title}</b></div>
                        <div className="d-flex">
                            <p>Genre: {movie.genre}</p>
                            <p>, Price: {movie.price}$</p>
                            <button className="ms-auto fs-2 invisible-button">
                                <FaCartPlus />
                            </button>
                        </div>
                        <div>
                            <Button onClick={() => handleClickDetails(movie.id)}>
                                Details
                            </Button>
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
}

export default MoviesList;