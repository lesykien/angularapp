import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export class ShopComponent implements OnInit {
  list: number[] = [1, 1, 1, 1, 1, 1, 1];
  ngOnInit(): void {}
}
