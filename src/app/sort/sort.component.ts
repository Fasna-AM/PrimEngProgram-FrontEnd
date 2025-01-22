import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sort',
  standalone: true,
  imports: [],
  templateUrl: './sort.component.html',
  styleUrl: './sort.component.css'
})
export class SortComponent {

  @Input() products: any = []
  
  sortProducts(order: 'asc' | 'desc') {
    this.products.sort((a: any, b: any) => {
      if (order === 'asc') {
        return a.name > b.name ? 1 : -1; // Ascending order
      } else {
        return a.name < b.name ? 1 : -1; // Descending order
      }
    });
  }
}
