import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ApiService } from '../services/api.service';
import { AddButtonComponent } from '../add-button/add-button.component';
import { SortComponent } from '../sort/sort.component';
import { SearchComponent } from '../search/search.component';
// import { AddEmployeeComponent } from '../add-employee/add-employee.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TableModule,RouterLink,FormsModule,AddButtonComponent,SortComponent,SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products:any =[]
  dummyProducts:any=[]
  receivedData: any=[]
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

}