import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductCategory } from 'src/app/classes/product-category';
import { ProductManagementService } from 'src/app/services/product-management.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {
  productCategoryList: ProductCategory[];
  constructor(private productService : ProductManagementService,private route :Router) { }

  ngOnInit(): void {
    this.getAllProductDetails();
  }

  AddNewProductCategory(){
    this.route.navigateByUrl("/addProductCategory")
  }

getAllProductDetails(){
  this.productService.getAllProductCategories().subscribe(data =>{
    console.log(data)
    this.productCategoryList = data
  })
}
}
