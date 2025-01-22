import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-products',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './add-products.component.html',
  styleUrl: './add-products.component.css'
})
export class AddProductsComponent {

  addProductForm:FormGroup
  id:string=""
  productDetails:any={}

  constructor(private fb:FormBuilder, private api:ApiService, private router:Router, private route:ActivatedRoute ){
    this.addProductForm= this.fb.group({
      name:["",[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      image:["",[Validators.required]],
      category:["",[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      price:["",[Validators.required,Validators.pattern('[0-9$.]*')]],
    })
  }
  ngOnInit(){
    this.route.params.subscribe((res:any)=>{
      this.id=res.id
      console.log(this.id);
      if(this.id){
        this.getProductDetails()
      }
    })
    this.productDetails.image=this.addProductForm.value.image

  }

  getProductDetails(){
    this.api.getOneProductAPI(this.id).subscribe((res:any)=>{
      this.productDetails= res
      // console.log(this.productDetails);
      
    })
  }
  addProducts(){
    if(this.addProductForm.valid){
      const name = this.addProductForm.value.name
      const image = this.addProductForm.value.image
      const category = this.addProductForm.value.category
      const price = this.addProductForm.value.price
      // console.log(name,image,category,price);
      
      this.api.addProductAPI({name,image,category,price}).subscribe((res:any)=>{
        alert("Products added successfully!!!")
        this.addProductForm.reset()
        this.router.navigateByUrl("")
      })
    }else{
      alert("Invalid Form")
    }
  }
  updateProducts(){
    
    this.api.updateProductAPI(this.id,this.productDetails).subscribe((res:any)=>{
      // console.log(res);
      alert("Product Details updated Successfully!!!")
      this.router.navigateByUrl("")
    })
  }

}
