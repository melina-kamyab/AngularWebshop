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

  private totalSum: number; 
  private cartItems: Movie[] = [];

  cartItem: Movie[] = [];
  
  //Once again, import the HTTP-client in order to get the 
  //data from the API
  constructor(private http:HttpClient) { }

  //create a function to get cartItems and update the localstorage. 
  getCartItems(): void {
  this.movies.next(JSON.parse(localStorage.getItem('cartItems')));
  }

  //when a movie is clicked and information is recieved byt the child component, 
  //the following function will notify us that the movie was clicked  
  addMovieToCart(selectedMovie: Movie): void {  
    if(JSON.parse(localStorage.getItem('cartItems'))){
      let getCartItems: [] = JSON.parse(localStorage.getItem('cartItems'));
      let updatedCart = [...getCartItems, selectedMovie];
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    } else{
      this.cartItem.push(selectedMovie);
      localStorage.setItem('cartItems', JSON.stringify(this.cartItem));
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

  //function for handling similar cart items and adding them together
  handleSimilarCartItems(){
    //create a holder for when looping through cartItems
    let updatedCartObject = {};
  
    //check for similar objects and add the prices of the similar objects together
    this.cartItems.forEach(function(movie){
      if (updatedCartObject.hasOwnProperty(movie.name)){
        updatedCartObject[movie.name] = updatedCartObject[movie.name] + movie.price;
      }else {
        updatedCartObject[movie.name] = movie.price
      }
    })
  
    //create a new cart-array and place the objects inside it 
    let updatedCart = [];

    for(let prop in updatedCartObject){
      updatedCart.push({name:prop, price:updatedCartObject[prop]});
    }

    console.log(updatedCart);
    return updatedCart;
  }

}
