import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ApiService } from '../services/api.service';
import { AddButtonComponent } from '../add-button/add-button.component';
import { SortComponent } from '../sort/sort.component';
import { SearchComponent } from '../search/search.component';
import { EditProductComponent } from "../edit-product/edit-product.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TableModule,FormsModule, AddButtonComponent, SortComponent, SearchComponent, EditProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products:any =[]
  dummyProducts:any=[]
  receivedData: any=[]
  newProduct:any={}
  UpdatedProductdetails:any={}

  constructor(private api:ApiService){}

  ngOnInit(){
    this.getAllProducts()
  }
  getAllProducts(){
    this.api.getAllProductsAPI().subscribe((res:any)=>{
      this.products = res
      this.dummyProducts=this.products
      // console.log(this.products);
      
    })
  }
  deleteProduct(id:any){
    this.api.deleteProductAPI(id).subscribe((res:any)=>{
      this.getAllProducts()
    })
  }
  receiveData(data: any) {
    this.products = data;  // Receive data from child
  }
  newProductDetails(data:any){
    this.newProduct=data
    // console.log(this.newProduct);
    this.api.addProductAPI(this.newProduct).subscribe((res:any)=>{
      alert("Products added successfully!!!")
      this.getAllProducts()
    })
  }
  editProductDetails(data:any){
    this.UpdatedProductdetails=data
    this.api.updateProductAPI(this.UpdatedProductdetails.id,this.UpdatedProductdetails).subscribe((res:any)=>{
      // console.log(res);
      alert("Product Details updated Successfully!!!")
    })
  }

}