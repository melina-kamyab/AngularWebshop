import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { nextTick } from 'process';
import { Subject } from 'rxjs';
import { Movie } from '../models/Movie';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  //Get the Movie-model and create an empty array and call it movies. 
  private movies = new Subject <Movie[]> ();
  cartItems$ = this.movies.asObservable();

  //Once again, import the HTTP-client in order to get the 
  //data from the API
  constructor(private http:HttpClient) { }

  //create a function to get cartItems and update the localstorage. Similar steps will 
  //be proceeded as in "movie.service.ts". Open file to see the step-by-step descriptions
  getCartItems(): void {

    if(!localStorage.getItem('cartItems')){
      //redirect to mainpage, or show an error message
    } else{
      this.movies.next(JSON.parse(localStorage.getItem('cartItems')));
    }
  }
}
