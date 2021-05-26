import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movie';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {
 //@Input() handleMovie($event:Movie);
  constructor() { }

  ngOnInit(): void {
  }

  // //when a movie is clicked and information is recieved byt the child component, 
  // //the following function will notify us that the movie was clicked  
  // handleMovie(movie: Movie): void {
  //   console.log("du klickade på: ", movie.name);

  //   movie.name = movie.name + "clicked"
  // }

}
