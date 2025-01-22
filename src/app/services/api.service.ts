import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  server_url = "http://localhost:3000"

  constructor(private http:HttpClient) { }

  //addProducts
  addProductAPI(reqbody:any){
    return this.http.post(`${this.server_url}/allProducts`,reqbody)
  }
   //getallProducts
   getAllProductsAPI(){
    return this.http.get(`${this.server_url}/allProducts`)
  }
  //deleteProduct
  deleteProductAPI(id:any){
    return this.http.delete(`${this.server_url}/allProducts/${id}`)
  }

  //updateemployee
  updateProductAPI(id:any,reqbody:any){
    return this.http.put(`${this.server_url}/allProducts/${id}`,reqbody)
  }

  //getOneProduct
  getOneProductAPI(id:any){
    return this.http.get(`${this.server_url}/allProducts/${id}`)
  }

}
