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
  totalSum: number;

  constructor(private service: CartService, private fb:FormBuilder) { }

  ngOnInit(): void {
    //get the cartItems from our service and subscribe on it 
    this.service.cartItems$.subscribe((data)=>{
      this.cartItems = data;
    })

     this.service.getCartItems();
     this.totalSum = this.service.handleCartItems();
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
