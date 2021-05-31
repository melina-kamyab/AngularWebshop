import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Movie } from 'src/app/models/Movie';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  cartItems: Movie[] = []

  constructor(private service: CartService) { }

  ngOnInit(): void {
    //get the cartItems from our service and subscribe on it 
    this.service.cartItems$.subscribe((data)=>{
      this.cartItems = data;
    })
    this.service.getCartItems();
    console.log(this.cartItems);

    this.handleCartItems()
  }

  //function for calculating the total som of all cart items and return the value 
  handleCartItems(){
    let totalSumInCart = this.cartItems.reduce((accumulator, currentValue)=>{ return accumulator + currentValue.price 
    }, 0)
    return totalSumInCart
  }

}
