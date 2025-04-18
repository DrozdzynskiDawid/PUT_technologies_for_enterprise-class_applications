import { FaShoppingCart } from "react-icons/fa";
import GenresDropdown from "../components/GenresDropdown";
import MoviesList from "../components/MoviesList";
import React, {useState} from "react";

function Main() {
    const [selectedGenre, setSelectedGenre] = useState("Filter By Genre");

    return (
        <div className="w-75 mt-2 mx-auto p-3 rounded fs-2">
            <div className="d-flex">
                <h1 className="mx-auto">Movies List App </h1>
                <FaShoppingCart className="mx-2 fs-1" />
            </div>
            <GenresDropdown selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre}/>
            <MoviesList selectedGenre={selectedGenre}/>
        </div>
    );
}

export default Main;