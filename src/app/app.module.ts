import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { ProductComponent } from './components/product/product.component';
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import {HttpClientModule} from '@angular/common/http';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AddProductDetailsComponent } from './components/add-product-details/add-product-details.component';
import { AddProductCategoryDetailsComponent } from './components/add-product-category-details/add-product-category-details.component';
import { FormsModule } from '@angular/forms';
import {Router, RouterModule, Route, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcomecomponent/welcomecomponent.component';



const route : Routes = [
  {path : "",component : HomePageComponent},
  {path : "product",component : ProductComponent},
  {path : "ProdcutCategory",component : ProductCategoryComponent},
  {path : "addProduct",component : AddProductDetailsComponent},
  {path : "addProductCategory",component : AddProductCategoryDetailsComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    ProductComponent,
    ProductCategoryComponent,
    HomePageComponent,
    AddProductDetailsComponent,
    AddProductCategoryDetailsComponent,
    WelcomeComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
