import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  public username:string="";
  public message:string="";
  public data:string="";


  constructor() { }

  ngOnInit(): void {
  }


  public onClick() {
    console.log("On Click event has been triggered !");
  }

  public onInput(event:any) {
    // console.log("On input has been raised",event.target.value);
    console.log(event.target.value);    
  }

  onSubmit(message:any) {
    this.message = message.value;
    console.log(message.value);    
  }
}
