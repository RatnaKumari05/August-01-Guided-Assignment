import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private route : Router) {}

  ngOnInit(): void {
  }

  ProductList(){
    this.route.navigateByUrl("/product")

  }
  ProductCategoryList(){
    this.route.navigateByUrl("/ProdcutCategory")
  }

}
