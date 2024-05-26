import { Component, OnInit } from '@angular/core';
import { _cart, cartLocal } from '../../Shared/Cart.shared';
import { products } from '../../model/products.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  listCart: cartLocal[] = [];
  amount: number = 0;
  ngOnInit(): void {
    this.LoadCart();
  }
  // load sản phẩm trong giỏ hàng
  LoadCart() {
    this.amount = 0;
    this.listCart = _cart.LoadItemInCart('cart');
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
    _cart.Remove(item, 'cart');
    this.LoadCart();
  }
  ChangeQuantity(item: any, type: string) {
    if (type == 'plus') {
      _cart.AddToCartLocal('cart', item);
      this.LoadCart();
    } else {
      _cart.MiniusQuantity(item, 'cart');
      this.LoadCart();
    }
  }
}
