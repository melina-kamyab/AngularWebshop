import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  cartItem: Movie[] = [];

  // to be able to loop through the list of movies that we recieve from the api 
  // firstly, we need to get it from the service:
  constructor(private service: MovieService) { }

  ngOnInit(): void {
    this.service.movies$.subscribe((data) => {
      this.movies = data;
    })
    this.service.getMovies();
  }

  //when a movie is clicked and information is recieved byt the child component, 
  //the following function will notify us that the movie was clicked  
  handleMovie(movie: Movie): void {    
    this.cartItem.push(movie);
    localStorage.setItem('cartItems', JSON.stringify(this.cartItem));
  }
}
