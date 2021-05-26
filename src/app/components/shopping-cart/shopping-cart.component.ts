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
  updatedCart: Movie[] = [];
  
  constructor(private service: CartService) { }


  ngOnInit(): void {
    //get the cartItems from our service and subscribe on it
    this.service.cartItems$.subscribe((data) => {
      this.cartItems = data;
    })
    this.service.getCartItems();
  }

  handleCartItems(){
    //create a holder for when looping through cartItems
    let holder = {};

    //check for similar objects and add the prices of the similar objects together
    this.cartItems.forEach(function(d){
      if (holder.hasOwnProperty(d.name)){
        holder[d.name] = holder[d.name] + d.price;
      }else {
        holder[d.name] = d.price
      }
    })
    
    //create a new cart-array and place the objects inside it 
    let updatedCart = [];
    for(let prop in holder){
      updatedCart.push({name:prop, price:holder[prop]});
    }
    console.log(updatedCart)
    //return value
    return updatedCart;
  }

}
