import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css-binding',
  templateUrl: './css-binding.component.html',
  styleUrls: ['./css-binding.component.css']
})
export class CssBindingComponent implements OnInit {

  //data 
  public username:string  ="John Smith";
  public age:number = 38;
  public message:string = "Today is a good day!";
  public isMarried:boolean = false;
  
  public colors  = {
    RED:'red',
    BLUE:'blue',
    GREEN:'green'
  }

  public product: Product = {
    id:343454,
    name:'Apple mac book xyz sries',
    price:546456.55,
    status:false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
// custom type.
interface Product {
  id:number;
  name:string;
  price:number;
  status:boolean;
}