import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movie';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  cartItems: Movie[] = [];
  
  constructor(private service: CartService) { }

  ngOnInit(): void {
    //get the cartItems from our service and subscribe on it
    this.service.cartItems$.subscribe((data) => {
      this.cartItems = data;
    })
    this.service.getCartItems();
    this.handleCartItems();
    //this.handleSimilarCartItems();
  }

  //function for calculating the total som of all cart items and return the value 
  handleCartItems(){
    let totalSumInCart = this.cartItems.reduce((accumulator, currentValue)=>{ return accumulator + currentValue.price 
    }, 0)
    return totalSumInCart
  }

  //function for removing a cart item on a click 
  removeCartItem(index:number):void{
    localStorage.getItem('cartItems');
    this.cartItems.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  // //function for handling similar cart items and adding them together
  // handleSimilarCartItems(){
  //   //create a holder for when looping through cartItems
  //   let updatedCartObject = {};
  
  //   //check for similar objects and add the prices of the similar objects together
  //   this.cartItems.forEach(function(movie){
  //     if (updatedCartObject.hasOwnProperty(movie.name)){
  //       updatedCartObject[movie.name] = updatedCartObject[movie.name] + movie.price;
  //     }else {
  //       updatedCartObject[movie.name] = movie.price
  //     }
  //   })
  
  //   //create a new cart-array and place the objects inside it 
  //   let updatedCart = [];

  //   for(let prop in updatedCartObject){
  //     updatedCart.push({name:prop, price:updatedCartObject[prop]});
  //   }

  //   console.log(updatedCart);
  //   return updatedCart;
  // }

  //JAG ÄR HÄR NU!!
  
  
  handlePayment(): void{
    this.handleCartItems();
  }
}


