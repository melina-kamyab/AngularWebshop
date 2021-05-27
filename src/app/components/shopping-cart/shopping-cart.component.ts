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
    //console.log(this.handleCartItems());
  }

  handleCartItems(){
    let totalSumInCart = this.cartItems.reduce((accumulator, currentValue)=>{ return accumulator + currentValue.price 
    }, 0)
    return totalSumInCart
  }
}


