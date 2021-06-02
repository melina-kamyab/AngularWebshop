import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../models/Movie';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
//Get the Order-model and create an empty array and call it orders. 
  // private orders = new Subject <Order[]> ();
  // orderDetails$ = this.orders.asObservable();
  // private customerOrder: Order[] = []

  constructor(private http: HttpClient) { }

  }


