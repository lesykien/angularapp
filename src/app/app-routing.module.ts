import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DogPageComponent } from './components/dog-page/dog-page.component';
import { CatPageComponent } from './components/cat-page/cat-page.component';
import { AccessoryComponent } from './components/accessory-page/accessory.component';
import { FoodPageComponent } from './components/food-page/food-page.component';
import { BlogComponent } from './components/blog/blog.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dog-page', component: DogPageComponent },
  { path: 'cat-page', component: CatPageComponent },
  { path: 'accessory-page', component: AccessoryComponent },
  { path: 'food-page', component: FoodPageComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
