import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { _cart, cartLocal } from '../../Shared/Cart.shared';
import { products } from '../../model/products.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private _product: ProductsService) {}

  ListProduct: products[] = [];
  listCart: cartLocal[] = [];
  amount: number = 0;
  ngOnInit(): void {
    this.LoadingPage();
    this.LoadCart();
  }

  // load sản phẩm trong serve
  LoadingPage() {
    this._product.getAllData().subscribe((response) => {
      this.ListProduct = response;
    });
  }
  // load sản phẩm trong giỏ hàng
  LoadCart() {
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
}
