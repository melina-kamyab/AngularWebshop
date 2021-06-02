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

    //create an empty array for orderRows that will match the object to be posted 
    let orderRows = [];

    //loop through the cart items and acquire the id for all cart items.
    // push the id's of each cart item respectively into the empty array, orderRows
    for (let i = 0; i < this.cartItems.length; i++) {
      let orderId = new OrderItems(this.cartItems[i].id);
      orderRows.push(orderId);
    }

    let date = new Date();

    //create an object that will take on the details from the form as well 
    // as from the orderRows-array 
    let newOrder = new Order(date, name, paymentMethod, totalSumInCart, [...orderRows])
    console.log(newOrder)
    this.orders.next(newOrder);

    this.sendOrder(newOrder)
  }

  sendOrder(newOrder: Order) {
    return this.http.post<Order>('https://medieinstitutet-wie-products.azurewebsites.net/api/orders', newOrder)
      .subscribe((data: Order) => { console.log(data) })
  }
}

