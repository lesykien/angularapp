import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CategoryService } from '../../services/category.service';
import { products } from '../../model/products.model';
import { categoryDTOs } from '../../model/categorys.model';
import { _cart } from '../../Shared/Cart.shared';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export class ShopComponent implements OnInit {
  constructor(
    private _products: ProductsService,
    private _categorys: CategoryService
  ) {}
  list: number[] = [1, 1, 1, 1, 1, 1, 1];
  listProducts: products[] = [];
  listCategorys: categoryDTOs[] = [];

  ngOnInit(): void {
    this.LoadCategorys();
    this.LoadProducts();
  }
  LoadProducts() {
    this._products.getAllData().subscribe((response) => {
      this.listProducts = response;
    });
  }
  LoadCategorys() {
    this._categorys.getData().subscribe((response) => {
      this.listCategorys = response;
    });
  }
  // thêm sản phẩm vào giỏ hàng
  AddToCart(item: products) {
    _cart.AddToCartLocal('cart', item);
    window.location.reload();
  }
}
