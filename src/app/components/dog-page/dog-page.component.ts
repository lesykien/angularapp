import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { products } from '../../model/products.model';
import { ProductsService } from '../../services/products.service';
import { CategoryService } from '../../services/category.service';
import { _cart } from '../../Shared/Cart.shared';

@Component({
  selector: 'app-dog-page',
  templateUrl: './dog-page.component.html',
  styleUrl: './dog-page.component.css',
})
export class DogPageComponent implements OnInit {
  constructor(
    private pramaster: ActivatedRoute,
    private product: ProductsService,
    private category: CategoryService,
    private router: Router
  ) {}
  listProducts: products[] = [];
  name: string = '';
  ngOnInit(): void {
    this.router.events.subscribe((envent) => {
      if (envent instanceof NavigationEnd) {
        this.LoadPage();
      }
    });
    this.LoadPage();
  }

  LoadName(id: number) {
    this.category.getData().subscribe((response) => {
      this.name = response.find((a) => a.id == id)?.name as string;
    });
  }
  LoadPage() {
    let id: number = this.pramaster.snapshot.params['id'];
    this.LoadName(id);
    this.product.getAllData().subscribe((response) => {
      this.listProducts = response.filter((a) => a.categoryId == id);
    });
  }
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
