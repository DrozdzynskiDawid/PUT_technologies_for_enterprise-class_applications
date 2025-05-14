package lab.moviesbackend.controllers;

import lab.moviesbackend.models.Movie;
import lab.moviesbackend.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class MovieController {

    @Autowired
    private MovieRepository movieRepository;

    @GetMapping("/movies")
    public List<Movie> getAllMovies() {
        List<Movie> movies = movieRepository.findAll();
        return movies;
    }

    @GetMapping("/genres")
    public List<String> getAllGenres() {
        List<String> genres = movieRepository.findAllGenres();
        return genres;
    }

    @GetMapping("/movies/{id}")
    public Movie getMovieById(@PathVariable long id) {
        Optional<Movie> movie = movieRepository.findById(id);
        return movie.orElse(null);
    }
}
