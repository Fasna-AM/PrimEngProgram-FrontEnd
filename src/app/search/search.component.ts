import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  // @Input() products:any=[]
  @Output()
  searchKey:string=""
  products:any=[]
  dummyProducts:any=[]
  @Output() dataSent = new EventEmitter<any>();

  

  constructor(private api:ApiService){}

  ngOnInit(){
    // this.dummyProducts = [...this.products]
    this.api.getAllProductsAPI().subscribe((res:any)=>{
      this.dummyProducts=res
    })
  }
  
  searchName(searchKey:string){
    
     this.products = this.dummyProducts.filter((item:any)=>item.name.toLowerCase().includes(searchKey.toLowerCase()))
     this.dataSent.emit(this.products);  // Emit data to parent
    //  console.log(this.products);
    // console.log(this.dummyProducts);
     
  }

}
