import { Component, OnInit } from '@angular/core';
import { zip } from 'rxjs';
import { Movie } from 'src/app/models/Movie';
import { MovieService } from 'src/app/services/movie.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  cartItem: Movie[] = [];
  selectedMovie: Movie;

  // to be able to loop through the list of movies that we recieve from the api 
  // firstly, we need to get it from the service:
  constructor(private movieService: MovieService, private cartService: CartService) { }

  ngOnInit(): void {
    this.movieService.movies$.subscribe((data) => {
      this.movies = data;
    })
    this.movieService.getMovies();
  }

  //when a movie is clicked and information is recieved byt the child component, 
  //the following function will notify us that the movie was clicked  
  handleMovie(movie: Movie): void {
    this.selectedMovie = movie;
    this.cartService.addMovieToCart(this.selectedMovie)
  }

}


