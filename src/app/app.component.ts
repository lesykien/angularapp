import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'angularapp';
  imgLink : string ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYREH-XVJq39CufTPwT-pjfDh5mfI-ZOS80nTN9Fc5sA&s';
  content : string ='<b>Hello<b> Chào mừng đến với Angular 17'

  isActive: boolean = true;
  sayHello(){
   this.isActive = !this.isActive
  }
}
