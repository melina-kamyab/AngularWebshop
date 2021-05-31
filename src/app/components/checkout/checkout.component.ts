import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Movie } from 'src/app/models/Movie';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  cartItems: Movie[] = []

  constructor(private service: CartService, private fb:FormBuilder) { }

  ngOnInit(): void {
    //get the cartItems from our service and subscribe on it 
    this.service.cartItems$.subscribe((data)=>{
      this.cartItems = data;
    })
    this.service.getCartItems();
    console.log(this.cartItems);

    this.handleCartItems();
  }

  //function for calculating the total som of all cart items and return the value 
  handleCartItems(){
    let totalSumInCart = this.cartItems.reduce((accumulator, currentValue)=>{ return accumulator + currentValue.price 
    }, 0)
    return totalSumInCart
  }

  // we use the formbuilder method to connects the 
  // values from our html 
  orderDetails = this.fb.group({
    firstname:[''],
    lastname:[''],
    totalPrice:[''],
  })
 
  //the values given from the formbuilder (see above)
  // are then acquired and used in the below function 
  // to be posted to the API
  onSubmit():void{
    console.log(this.orderDetails.value)
    //this.http.post
  }
}
