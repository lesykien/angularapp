import { Component, OnInit } from '@angular/core';
import { _cart, cartLocal } from '../../Shared/Cart.shared';
import { CategoryService } from '../../services/category.service';
import { categoryDTOs } from '../../model/categorys.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  constructor(private _category: CategoryService) {}
  listItem: cartLocal[] = [];
  categoris: categoryDTOs[] = [];
  ngOnInit(): void {
    this.LoadCountItemCart();
    this.LoadCategorys();
  }

  LoadCountItemCart() {
    this.listItem = _cart.LoadItemInCart('cart');
  }
  LoadCategorys() {
    this._category.getData().subscribe((response) => {
      this.categoris = response;
    });
  }
}
