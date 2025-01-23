import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Dialog, DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [Dialog, ButtonModule, InputTextModule, ReactiveFormsModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {

  visible: boolean = false;
  addProductForm: FormGroup
  @Output() UpdatedProduct = new EventEmitter<any>()
  @Input()  productDetails:any = {}


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
  }
  

  hideDialog() {
    if (this.addProductForm.valid) {
      // console.log(this.productDetails);
      this.UpdatedProduct.emit(this.productDetails)
      this.visible = false;
    } else {
      alert("Invalid Form")
    }
  }
}
