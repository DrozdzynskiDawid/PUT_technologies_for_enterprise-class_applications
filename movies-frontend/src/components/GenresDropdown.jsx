import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function GenresDropdown({ selectedGenre, setSelectedGenre }) {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/genres')
            .then(response => setGenres(response.data))
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

    const handleSelect = (genre) => {
        setSelectedGenre(genre);
    };

    return (
        <div className="d-flex my-3">
            <DropdownButton variant="secondary" id="dropdown-basic-button" title={selectedGenre} onSelect={handleSelect}>
                <Dropdown.Item href="" eventKey={"Filter By Genre"}>Filter By Genre</Dropdown.Item>
                {genres.map((genre, index) => (
                    <Dropdown.Item href="" eventKey={genre} key={index}>{genre}</Dropdown.Item>
                ))}
            </DropdownButton>
        </div>
    );
}

export default GenresDropdown;