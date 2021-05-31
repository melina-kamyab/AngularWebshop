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
    console.log(this.service.getCartItems)

    this.handleCartItems();
  }

  handleCartItems(){
    //calculate the total som of all cart items and return the value 
    let totalSumInCart = this.cartItems.reduce((accumulator, currentValue)=>{ return accumulator + currentValue.price 
    }, 0)
    return totalSumInCart
  }

  removeCartItem(index:number):void{
    localStorage.getItem('cartItems');
    this.cartItems.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  // GÖR NÅGOT ÅT DENNA KOLLA ÄVEN HTML FIL
  handlePayment(): void{
 
  }
}


