import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../classes/product';
import { ProductCategory } from '../classes/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductManagementService {
  constructor( private httpClient : HttpClient) {}
  private ProductUrl = "http://localhost:8080/api/products";
  private ProductCategoryUrl = "http://localhost:8080/api/productCategories";

  

  getAllProducts() : Observable<Product[]>{
    // console.log(this.httpClient.get<getProducts>(this.productURL).pipe(map(response => response._embedded.products)));
    return this.httpClient.get<getProducts>(this.ProductUrl).pipe(map(response => response._embedded.products))
    
  }
  getAllProductCategories() : Observable<ProductCategory[]>{
    return this.httpClient.get<getProductsCategory>(this.ProductCategoryUrl).pipe(map(response => response._embedded.productCategories))
  }
  saveProductDetails(product : Product) : Observable<Product>{
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : 'auth-token',
        'Access-Control-Allow-Origin' : '*'
      })
    }
    return this.httpClient.post<Product>(this.ProductUrl,product,httpOptions)
  }
  saveProductCategoryDetails(productCategory: ProductCategory): Observable<ProductCategory>{
  const httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json',
        'Authorization' : 'auth-token',
        'Access-Control-Allow-Origin' : '*'
    })
  }
    return this.httpClient.post<ProductCategory>(this.ProductCategoryUrl,productCategory,httpOptions)
  }
  
}


interface getProductsCategory{
  _embedded :{
    productCategories : ProductCategory[]
  }
}
  interface getProducts{
    _embedded :{
      products : Product[]
    }
  }


