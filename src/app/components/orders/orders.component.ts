import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';
import { orderDTOs, orderSingle } from '../../model/order.model';
import { UserService } from '../../services/user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { user } from '../../model/user.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent implements OnInit {
  constructor(
    private _order: OrderService,
    private router: Router,
    private _user: UserService,
    private form: FormBuilder
  ) {}
  FormUser = this.form.group({
    fullname: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    address: ['', Validators.required],
  });
  orders: orderDTOs[] = [];
  orderById?: orderSingle;
  ngOnInit(): void {
    this.IsLooadPage();
  }
  IsLooadPage() {
    let id: number = Number(localStorage.getItem('id'));
    if (!id) {
      this.router.navigate(['/']);
      return;
    }
    this.LoadOrder(id);
    this.GetUser(id);
  }
  LoadOrder(id: number) {
    this._order.getData().subscribe((response) => {
      this.orders = response.filter((a) => a.accountId == id);
    });
  }
  GetById(id: number) {
    this._order.getById(id).subscribe((response) => {
      this.orderById = response;
    });
  }
  GetUser(id: number) {
    this._user.getById(id).subscribe((response) => {
      this.LoadForm(response);
    });
  }
  LoadForm(item: user) {
    this.FormUser.get('fullname')!.setValue(item.fullName);
    this.FormUser.get('email')!.setValue(item.email);
    this.FormUser.get('phone')!.setValue(item.phoneNumber);
    this.FormUser.get('address')!.setValue(item.address);
  }
  LogOut() {
    localStorage.removeItem('id');
    this.router.navigate(['/']);
  }
}
