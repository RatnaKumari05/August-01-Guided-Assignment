import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductCategory } from 'src/app/classes/product-category';
import { ProductManagementService } from 'src/app/services/product-management.service';

@Component({
  selector: 'app-add-product-category-details',
  templateUrl: './add-product-category-details.component.html',
  styleUrls: ['./add-product-category-details.component.css']
})
export class AddProductCategoryDetailsComponent implements OnInit {

  productCategory : ProductCategory = new ProductCategory(0,"")
  constructor(private service : ProductManagementService,
    private route : Router) { }

  ngOnInit(): void {
  }

  
  onSubmit(){
    this.service.saveProductCategoryDetails(this.productCategory).subscribe(()=>{
      this.route.navigateByUrl("/ProdcutCategory")
    })
  }

}
