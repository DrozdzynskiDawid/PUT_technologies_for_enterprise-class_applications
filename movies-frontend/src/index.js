import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MoviesList from "./components/MoviesList";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaShoppingCart } from "react-icons/fa";
import GenresDropdown from "./components/GenresDropdown";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <div className="main w-75 mt-2 mx-auto p-3 rounded fs-2">
          <div className="d-flex">
              <h1 className="mx-auto">Movies List App </h1>
              <FaShoppingCart className="mx-2" />
          </div>
          <GenresDropdown />
          <MoviesList />
      </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
