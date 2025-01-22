import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddProductsComponent } from './add-products/add-products.component';

export const routes: Routes = [
    {
        path:"",component:HomeComponent,title:"Product List"
    },
    {
        path:"manageProducts",component:AddProductsComponent,title:"Add Product"
    },
    {
        path:"manageProducts/:id",component:AddProductsComponent,title:"Update Product"
    },
];
