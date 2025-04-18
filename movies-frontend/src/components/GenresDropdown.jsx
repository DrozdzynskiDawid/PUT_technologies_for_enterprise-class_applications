import './GenresDropdown.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function GenresDropdown() {
    const [genres, setGenres] = useState([]);
    const [selected, setSelected] = useState("Filter By Genre");

    useEffect(() => {
        axios.get('http://localhost:8080/api/genres')
            .then(response => setGenres(response.data))
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

    const handleSelect = (genre) => {
        setSelected(genre);
    };

    return (
        <div className="d-flex align-items-center gap-2">
            <p>Filter: </p>
            <DropdownButton id="dropdown-basic-button" title={selected} onSelect={handleSelect}>
                {genres.map((genre, index) => (
                    <Dropdown.Item href="" eventKey={genre} key={index}>{genre}</Dropdown.Item>
                ))}
            </DropdownButton>
        </div>
    );
}

export default GenresDropdown;