package lab.moviesbackend.controllers;

import lab.moviesbackend.models.Movie;
import lab.moviesbackend.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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
}
