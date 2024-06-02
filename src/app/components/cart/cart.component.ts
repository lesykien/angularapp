import { Component, OnInit } from '@angular/core';
import { _cart, cartLocal } from '../../Shared/Cart.shared';
import { products } from '../../model/products.model';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import e, { response } from 'express';
import { user } from '../../model/user.model';
import { _orderModel, order } from '../../model/order.model';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  constructor(
    private form: FormBuilder,
    private _user: UserService,
    private _order: OrderService
  ) {}

  FormOrder = this.form.group({
    fullname: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    address: ['', Validators.required],
  });
  listCart: cartLocal[] = [];
  amount: number = 0;
  ngOnInit(): void {
    this.LoadCart();
    this.LoadPage();
  }
  // load sản phẩm trong giỏ hàng
  LoadCart() {
    this.amount = 0;
    let id = localStorage.getItem('id');
    if (id) {
      this.listCart = _cart.LoadItemInCart(`cart${id}`);
    } else {
      this.listCart = _cart.LoadItemInCart('cart');
    }
    // tính tổng tiền
    for (let item of this.listCart) {
      this.amount += item.price * item.quantity;
    }
  }
  // thêm sản phẩm vào giỏ hàng
  AddToCart(item: products) {
    _cart.AddToCartLocal('cart', item);
    window.location.reload();
  }
  RemoveItem(item: cartLocal) {
    let id = localStorage.getItem('id');
    if (id) {
      _cart.Remove(item, `cart${id}`);
    } else {
      _cart.Remove(item, 'cart');
    }
    this.LoadCart();
  }

  ChangeQuantity(item: any, type: string) {
    let id = localStorage.getItem('id');
    let key: string = '';
    if (id) {
      key = `cart${id}`;
    } else {
      key = `cart`;
    }
    if (type == 'plus') {
      _cart.AddToCartLocal(key, item);
      this.LoadCart();
    } else {
      _cart.MiniusQuantity(item, key);
      this.LoadCart();
    }
  }

  LoadPage() {
    let id: number = Number(localStorage.getItem('id'));
    if (id) {
      this._user.getById(id).subscribe((response) => {
        this.LoadForm(response);
      });
    }
  }

  LoadForm(item: user) {
    this.FormOrder.get('fullname')!.setValue(item.fullName);
    this.FormOrder.get('email')!.setValue(item.email);
    this.FormOrder.get('phone')!.setValue(item.phoneNumber);
    this.FormOrder.get('address')!.setValue(item.address);
  }

  Create() {
    let id: number = Number(localStorage.getItem('id'));
    if (id) {
      let request: order = _orderModel.CreateRequest(id, this.listCart);
      this._order.create(request).subscribe((response) => {
        console.log(response);
      });
      return;
    }
    alert('Bạn phải đăng nhập mới có thể đặt hàng');
  }
}
