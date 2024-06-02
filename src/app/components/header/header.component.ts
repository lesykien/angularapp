import { Component, OnInit } from '@angular/core';
import { _cart, cartLocal } from '../../Shared/Cart.shared';
import { CategoryService } from '../../services/category.service';
import { categoryDTOs } from '../../model/categorys.model';
import { UserService } from '../../services/user.service';
import { _userModel, user } from '../../model/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  constructor(private _category: CategoryService, private _user: UserService) {}
  listItem: cartLocal[] = [];
  categoris: categoryDTOs[] = [];
  fullName: string = '';
  user: user = _userModel.newUser();

  ngOnInit(): void {
    this.LoadCountItemCart();
    this.LoadCategorys();
    this.LoadUser();
  }

  LoadCountItemCart() {
    let id = localStorage.getItem('id');
    if (id) {
      this.listItem = _cart.LoadItemInCart(`cart${id}`);
    } else {
      this.listItem = _cart.LoadItemInCart('cart');
    }
  }
  LoadCategorys() {
    this._category.getData().subscribe((response) => {
      this.categoris = response;
    });
  }

  LoadUser() {
    let id: number = Number(localStorage.getItem('id'));
    this._user.getById(id).subscribe((response) => {
      this.user = response;
    });
  }
}
