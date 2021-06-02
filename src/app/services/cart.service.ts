import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Movie } from '../models/Movie';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  //Get the Movie-model and create an empty array and call it movies. 
  private movies = new Subject <Movie[]> ();
  cartItems$ = this.movies.asObservable();

  private cartItems: Movie[] = [];

  //Once again, import the HTTP-client in order to get the data from the API
  constructor(private http:HttpClient) { }

  //create a function to get cartItems and update the localstorage. 
  getCartItems(): void {
    if(!localStorage.getItem('cartItems')){
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    } else{
      this.movies.next(JSON.parse(localStorage.getItem('cartItems')));
    }
  }

  //when a movie is clicked and information is recieved byt the child component, 
  //the following function will notify us that the movie was clicked  
  addMovieToCart(selectedMovie: Movie): void {  
    if(JSON.parse(localStorage.getItem('cartItems'))){
      let getCartItems: [] = JSON.parse(localStorage.getItem('cartItems'));
      let updatedCart = [...getCartItems, selectedMovie];
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    } else{
      this.cartItems.push(selectedMovie);
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    }
  } 
  
  //function for calculating the total som of all cart items and return the value 
  handleCartItems(): number {
    let cartItems = JSON.parse(localStorage.getItem('cartItems'));
    let totalSumInCart = cartItems.reduce((accumulator, currentValue)=>{ return accumulator + currentValue.price 
    }, 0)
    return totalSumInCart;
  }

  //function for removing a cart item on a click 
  removeCartItem(position:number) {
    let cartItemsFromLS = JSON.parse(localStorage.getItem('cartItems'));
    cartItemsFromLS.splice(position, 1);
    localStorage.setItem('cartItems', JSON.stringify(cartItemsFromLS));
    this.movies.next(cartItemsFromLS);
  }

}
