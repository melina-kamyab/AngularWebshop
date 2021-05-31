import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/models/Movie';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  @Input() movie: Movie;
  @Output() selectedMovie = new EventEmitter <Movie>();


  constructor() { }

  ngOnInit(): void {
  }

  //when the client/user clicks on the movie 
  //(see "movie.component.html") the follwoing function should start
  handleClick(): void{
    //we want the selectedMovie to start the function 
    //"emit" and send the movie-object as the function called 
    //(to be recieved by a function in the parent component):
    this.selectedMovie.emit(this.movie);
    //console.log(this.movie)
  }
}
