import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CategoryService } from '../../services/category.service';
import { products } from '../../model/products.model';
import { categoryDTOs } from '../../model/categorys.model';
import { _cart } from '../../Shared/Cart.shared';
import { response } from 'express';

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
  search: string = '';
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
    let id = localStorage.getItem('id');
    if (id) {
      _cart.AddToCartLocal(`cart${id}`, item);
    } else {
      _cart.AddToCartLocal('cart', item);
    }
    window.location.reload();
  }

  GetByCategory(id: number) {
    if (id === 0) {
      this.LoadProducts();
      return;
    }
    this._products.getAllData().subscribe((response) => {
      this.listProducts = response.filter((a) => a.categoryId == id);
    });
  }

  Search(name: string) {
    if (name.trim() == '') {
      this.LoadProducts();
      return;
    }
    this.FiterSearch(name);
  }
  FiterSearch(name: string) {
    this._products.getAllData().subscribe((response) => {
      this.listProducts = response.filter((a) =>
        a.name.trim().toUpperCase().includes(name.trim().toUpperCase())
      );
    });
  }
}
