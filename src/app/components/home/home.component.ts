import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { _cart, cartLocal } from '../../Shared/Cart.shared';
import { products } from '../../model/products.model';
import { CategoryService } from '../../services/category.service';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(
    private _product: ProductsService,
    private _category: CategoryService,
    private blog: BlogService
  ) {}

  ListProduct: products[] = [];
  listCart: cartLocal[] = [];
  listBestSeller: products[] = [];
  listBlog: any;
  amount: number = 0;
  ngOnInit(): void {
    this.LoadingPage();
    this.LoadCart();
    this.LoadBestSeller();
    this.LoadBlog();
  }

  // load sản phẩm trong serve
  LoadingPage() {
    this._product.getAllData().subscribe((response) => {
      this.ListProduct = response;
    });
  }
  LoadBestSeller() {
    this._product.getBestSeller().subscribe((response) => {
      this.listBestSeller = response;
    });
  }
  LoadBlog() {
    this.blog.getByNumber().subscribe((response) => {
      this.listBlog = response;
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
    let id = localStorage.getItem('id');
    if (id) {
      _cart.AddToCartLocal(`cart${id}`, item);
    } else {
      _cart.AddToCartLocal('cart', item);
    }
    window.location.reload();
  }
}
