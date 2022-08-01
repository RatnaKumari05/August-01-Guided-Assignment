import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcomecomponent',
  templateUrl: './welcomecomponent.component.html',
  styleUrls: ['./welcomecomponent.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  addProduct(){
    this.route.navigateByUrl("/merchant")
  }
  viewProduct(){
    this.route.navigateByUrl("/shop")
  }
  categoryDetails(){
    this.route.navigateByUrl("/categories")
  }

}
