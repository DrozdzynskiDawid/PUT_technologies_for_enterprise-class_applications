import { FaShoppingCart } from "react-icons/fa";
import GenresDropdown from "../components/GenresDropdown";
import MoviesList from "../components/MoviesList";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Main() {
    const [selectedGenre, setSelectedGenre] = useState("Filter By Genre");
    const navigate = useNavigate();

    const handleClickCart = () => {
        navigate(`/cart`);
    };

    return (
        <div className="w-75 mt-2 mx-auto p-3 fs-2">
            <div className="d-flex">
                <h1 className="me-auto">
                    Movies List App
                </h1>
                <button className="invisible-button mx-2 fs-1">
                    <FaShoppingCart
                        onClick={() => handleClickCart()}
                    />
                </button>
            </div>
            <GenresDropdown
                selectedGenre={selectedGenre}
                setSelectedGenre={setSelectedGenre}
            />
            <MoviesList
                selectedGenre={selectedGenre}
            />
        </div>
    );
}

export default Main;