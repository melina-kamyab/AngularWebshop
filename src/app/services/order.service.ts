import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../models/Movie';
import { Subject } from 'rxjs';
import { Order, OrderItems } from '../models/Order';

@Injectable({
  providedIn: 'root'
})

export class OrderService {
  //Get the Order-model and create an empty array and call it orders. 
  orders = new Subject<Order>();
  orderDetails$ = this.orders.asObservable();
  cartItems: Movie[] = [];

  constructor(private http: HttpClient) { }

  createOrder(name: string, paymentMethod: string): void {
    //get cart items from local storage 
    this.cartItems = JSON.parse(localStorage.getItem('cartItems'));

    //calculate the total sum of all cart items 
    let totalSumInCart = this.cartItems.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price
    }, 0)

    //create an empty array for the orderRows that will later on be posted 
    let orderRows = [];
    //loopa igenom carten 
    for (let i = 0; i < this.cartItems.length; i++ ){
      let orderId = new OrderItems(this.cartItems[i].id);
      orderRows.push(orderId);
    }

     let newOrder = new Order(name, "", totalSumInCart, [...orderRows])
   
     this.orders.next(newOrder)
     //return this.http.post<Order>('https://medieinstitutet-wie-products.azurewebsites.net/api/orders', this.customerOrder);
    //customerOrder: Order = new Order("customerName", "visa", 150, []);
  }
}

