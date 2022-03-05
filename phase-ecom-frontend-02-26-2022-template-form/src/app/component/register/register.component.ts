import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user: User = {
    firstName:'',
    lastName:"",
    password:'',
    email:'',
    state:'',
    zipcode:0,
    agree:false
  }
  public submitted:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(form:any) {
    console.log("The form has submited");
    if(form.valid){
      this.submitted = true;
      console.log(this.user);
    } else{
      this.validate(form);
    }
    
  }

  hasError(field:any) {
    return (field.invalid && field.touched && field.errors);
  }

  validate(form:any){
    console.log(form);
    
    Object.keys(form.controls).forEach(field =>{
      const control = form.controls[field];
      control.markAsTouched({ onlySelft : true});
    })
  }

}

interface User {
  firstName:string;
  lastName:string;
  password:string;
  email:string;
  state:string;
  zipcode:number;
  agree:boolean;
}