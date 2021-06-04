import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../models/Movie';
import { Observable, Subject } from 'rxjs';
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

  //function for handling the post of teh order 
  createOrder(name: string, paymentMethod: string): Observable <Order> {
    //get cart items from local storage 
    this.cartItems = JSON.parse(localStorage.getItem('cartItems'));

    //calculate the total sum of all cart items 
    let totalSumInCart = this.cartItems.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price
    }, 0)

    //create an empty array that will later on be matched with the the obejct of the API 
    let orderRows = [];

    //loop through the cart items and acquire the id for each cart item.
    // push the id's of each cart item respectively into the empty array, orderRows
    for (let i = 0; i < this.cartItems.length; i++) {
      let orderInfo = new OrderItems(this.cartItems[i].id);
      orderInfo.amount = 1;
      orderRows.push(orderInfo);
      console.log(orderRows)
    }

    //another variable for our post that will show us the current date of the order 
    let date = new Date();

    //create an object that will take on the details from the form as well 
    // as from the orderRows-array 
    let newOrder = new Order(date, name, paymentMethod, totalSumInCart, [...orderRows])

    return this.sendOrder(newOrder);
  }

  //separate function to do the actual post of the order 
  sendOrder(newOrder: Order) {
    return this.http.post<Order>('https://medieinstitutet-wie-products.azurewebsites.net/api/orders', newOrder);
  }

  //function for emptying the local storage of cart items
  clearCart(): void {
    localStorage.removeItem('cartItems');
  }
}

