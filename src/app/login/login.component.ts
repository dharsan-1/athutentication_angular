import { Component, OnInit } from '@angular/core';
import { CredentialsService } from '../Services/credentials.service';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: any = ""
  userPassword:any=""
  arrived_data:any = {}
  error_msg = ""

  formsGrp = new FormGroup({
    "userEmail": new FormControl("",[Validators.required,Validators.email]),
    "password" : new FormControl("",[Validators.required])
  })



  constructor(public linkRouter:Router, private _AuthData: AuthService) {}
 
  
  ngOnInit(): void {
  }
  onLogin(){
    if(this.formsGrp.value.userEmail ===  ""){
      alert("Please provide Email")
      return
    }
    if(this.formsGrp.value.password === ""){
      alert("please provide password")
    }
    this._AuthData.loginUser(this.formsGrp.value.userEmail,this.formsGrp.value.password)

  }
  signInWithGoogle(){
    this._AuthData.googleSignIn()
  }


}
