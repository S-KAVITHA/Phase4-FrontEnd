import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way',
  templateUrl: './one-way.component.html',
  styleUrls: ['./one-way.component.css']
})
export class OneWayComponent implements OnInit {

  // data properties
  public title:string ="Apple mac book xyz series";
  public desc:string = 'This is a Laptop';
  public price:number = 789785.434;
  public isActive:boolean = false;
  public customer = {
    id:23423453,
    name:'John smith',
    age:20
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
