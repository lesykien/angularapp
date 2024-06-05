import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CategoryService } from '../../services/category.service';
import { products } from '../../model/products.model';
import { categoryDTOs } from '../../model/categorys.model';
import { _cart } from '../../Shared/Cart.shared';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export class ShopComponent implements OnInit {
  constructor(
    private _products: ProductsService,
    private _categorys: CategoryService,
    private router: Router,
    private pramaster: ActivatedRoute
  ) {}
  list: number[] = [1, 1, 1, 1, 1, 1, 1];
  listProducts: products[] = [];
  listCategorys: categoryDTOs[] = [];
  search: string = '';
  listNumber: number[] = [];
  page: number = 1;
  id: number = 0;
  ngOnInit(): void {
    this.LoadCategorys();
    this.router.events.subscribe((envent) => {
      if (envent instanceof NavigationEnd) {
        this.LoadProducts();
        this.LoadNumberPage();
      }
    });
    this.LoadProducts();
    this.LoadNumberPage();
  }
  LoadProducts() {
    let id: number = this.pramaster.snapshot.params['id'];
    let page: number = this.pramaster.snapshot.params['page'];
    this.page = page;
    this._products.getShop(id, page).subscribe((response) => {
      this.listProducts = response;
    });
  }
  LoadCategorys() {
    this._categorys.getData().subscribe((response) => {
      this.listCategorys = response;
    });
  }
  LoadNumberPage() {
    this.listNumber = [];
    this._products.getAllData().subscribe((response) => {
      let number: number = Math.floor(response.length / 12);
      for (let i = 1; i <= number; i++) {
        this.listNumber.push(i);
      }
    });
  }
  ChangeRouter(page: number) {
    let id: number = this.pramaster.snapshot.params['id'];
    this.router.navigate([`shop/${id}/${page}`]);
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
    this.id = id;
    this.router.navigate([`shop/${id}/1`]);
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
