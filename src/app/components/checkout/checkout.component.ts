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
  totalSum: number;

  constructor(private service: CartService) { }

  ngOnInit(): void {
    //get the cartItems from our service and subscribe on it 
    this.service.cartItems$.subscribe((data)=>{
      this.cartItems = data;
    })
    
     this.service.getCartItems();
     this.totalSum = this.service.handleCartItems();
  }

}
