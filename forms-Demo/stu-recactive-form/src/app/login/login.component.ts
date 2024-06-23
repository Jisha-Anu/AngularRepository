import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormGroup,FormControl,Validators],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  LoginForm:any=FormGroup;
  ngOnInit(){
    this.LoginForm=new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]) ,
      password:new FormControl('',Validators.required)
    });
      
  }
  onSubmit(){
    //Handle form submission here
    if(this.LoginForm.Valid){
      console.log(this.LoginForm.value)
    }
  }


}
