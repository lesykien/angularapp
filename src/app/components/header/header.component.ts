import { Component, OnInit } from '@angular/core';
import { _cart, cartLocal } from '../../Shared/Cart.shared';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  listItem: cartLocal[] = [];

  ngOnInit(): void {
    this.LoadCountItemCart();
  }

  LoadCountItemCart() {
    this.listItem = _cart.LoadItemInCart('cart');
  }
}
