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
    this.service.cartItems$.subscribe((data) => {
      this.cartItems = data;
    })
    this.service.getCartItems();
    console.log(this.cartItems)
  }

}
