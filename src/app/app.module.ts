import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DogPageComponent } from './components/dog-page/dog-page.component';
import { CatPageComponent } from './components/cat-page/cat-page.component';
import { AccessoryComponent } from './components/accessory-page/accessory.component';
import { FoodPageComponent } from './components/food-page/food-page.component';
import { BlogComponent } from './components/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DogPageComponent,
    CatPageComponent,
    FoodPageComponent,
    AccessoryComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
