import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Dialog, DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-add-button',
  standalone: true,
  imports: [Dialog, ButtonModule, InputTextModule, ReactiveFormsModule],
  templateUrl: './add-button.component.html',
  styleUrl: './add-button.component.css'
})
export class AddButtonComponent {
  visible: boolean = false;
  addProductForm: FormGroup
  productDetails: any = {}
  @Output() newProduct = new EventEmitter<any>()
  



  constructor(private fb: FormBuilder) {
    this.addProductForm = this.fb.group({
      name: ["", [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      image: ["", [Validators.required]],
      category: ["", [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      price: ["", [Validators.required, Validators.pattern('[0-9$.]*')]],
    })
  }


  showDialog() {
    this.visible = true;
    this.addProductForm.reset()
    this.productDetails.image=""
  }
  addImage(){
    this.productDetails.image = this.addProductForm.value.image
  }

  hideDialog() {
    if (this.addProductForm.valid) {
      this.productDetails.name = this.addProductForm.value.name
      this.productDetails.image = this.addProductForm.value.image
      this.productDetails.category = this.addProductForm.value.category
      this.productDetails.price = this.addProductForm.value.price
      // console.log(this.productDetails);
      this.newProduct.emit(this.productDetails)
      this.visible = false;
    } else {
      alert("Invalid Form")
    }
  }
}
