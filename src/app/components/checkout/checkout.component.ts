import { Component, OnInit } from '@angular/core';
import { FormBuilder, } from '@angular/forms';
import { Movie } from 'src/app/models/Movie';
import { Customer, Order, OrderItems } from 'src/app/models/Order';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  cartItems: Movie[] = []

  orders: Order [] = []
  customer: Customer [] = [];
  orderItems: OrderItems[] = [];

  totalSum: number;

  constructor(private cartService: CartService, private fb:FormBuilder, private orderServive: OrderService) { }

  ngOnInit(): void {
    //get the cartItems from our cartService and subscribe on it 
    this.cartService.cartItems$.subscribe((data)=>{
      this.cartItems = data;
    })
     this.cartService.getCartItems();
     this.totalSum = this.cartService.handleCartItems();
     
     
     this.createOrder();
  }

  // we use the formbuilder method to connects the 
  // values from our html 
  orderDetails = this.fb.group({
    name:[''],
    phone:[''],
    email:[''],
  })


  createOrder(){
   console.log(this.orderDetails)
  }


 
  //the values given from the formbuilder (see above)
  // are then acquired and used in the below function 
  // to be posted to the API
  onSubmit():void{
    console.log(this.orderDetails.value)
    //this.http.post
  }
}
