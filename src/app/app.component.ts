import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'forDemo';
  /*products=[ {
    title: 'samsung s23',
    price: 250,
    url: 'https://images.samsung.com/is/image/samsung/levant-galaxy-note10-plus-n975-sm-n975fzsdmid-backauraglow-thumb-182079707?$344_344_PNG',
  },
  {
    title: 'samsung s23',
  price: 250,
  url: 'https://images.samsung.com/is/image/samsung/levant-galaxy-note10-plus-n975-sm-n975fzsdmid-backauraglow-thumb-182079707?$344_344_PNG',
},
{
  title: 'samsung s23',
price: 250,
url: 'https://images.samsung.com/is/image/samsung/levant-galaxy-note10-plus-n975-sm-n975fzsdmid-backauraglow-thumb-182079707?$344_344_PNG',
},
{
  title: 'samsung s23',
price: 250,
url: 'https://images.samsung.com/is/image/samsung/levant-galaxy-note10-plus-n975-sm-n975fzsdmid-backauraglow-thumb-182079707?$344_344_PNG',
},
{
  title: 'samsung s23',
price: 250,
url: 'https://images.samsung.com/is/image/samsung/levant-galaxy-note10-plus-n975-sm-n975fzsdmid-backauraglow-thumb-182079707?$344_344_PNG',
},];*/

products:any[] = [];
  constructor() {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => { console.log(data),this.products = data });
  }
}
