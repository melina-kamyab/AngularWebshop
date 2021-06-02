import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/Order';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  customerOrders: Order[] = [];

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.orders$.subscribe((data) => {
      this.customerOrders = data;
    })
    this.adminService.getOrders()

    console.log(this.customerOrders)
  }

}
