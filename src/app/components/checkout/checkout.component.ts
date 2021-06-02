import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Movie } from 'src/app/models/Movie';
import { Order } from 'src/app/models/Order';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})

export class CheckoutComponent implements OnInit {
  cartItems: Movie[] = [];
  totalSum: number;
  
  customerForm = this.fb.group({
    name: ['', Validators.required], 
    phone:['', Validators.required],
    email: ['', Validators.required],
    paymentMethod: ['', Validators.required],
  })

  constructor(private cartService: CartService, private orderServive: OrderService, private fb: FormBuilder) { }

  ngOnInit(): void {
    //get the cartItems from our cartService and subscribe on it 
    this.cartService.cartItems$.subscribe((data) => {
      this.cartItems = data;
    })
    this.cartService.getCartItems();
    this.totalSum = this.cartService.handleCartItems();
    //let order = this.orderServive.orders.subscribe((data) => { console.log(data) })
  }

  //the values given from the formbuilder (see above)
  // are then acquired and used in the below function 
  // to be posted to the API
  handleFormSubmit(): void {
    let name = this.customerForm.value.name;
    let paymentMethod = this.customerForm.value.paymentMethod;

    this.orderServive.createOrder(name, paymentMethod)
  }


}
