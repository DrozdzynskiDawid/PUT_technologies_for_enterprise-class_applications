import { FaShoppingCart } from "react-icons/fa";
import GenresDropdown from "../components/GenresDropdown";
import MoviesList from "../components/MoviesList";
import React from "react";

function Main() {
    return (
        <div className="w-75 mt-2 mx-auto p-3 rounded fs-2">
            <div className="d-flex">
                <h1 className="mx-auto">Movies List App </h1>
                <FaShoppingCart className="mx-2 fs-1" />
            </div>
            <GenresDropdown />
            <MoviesList />
        </div>
    );
}

export default Main;