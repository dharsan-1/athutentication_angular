import { Component, OnInit } from '@angular/core';
import { CredentialsService } from '../Services/credentials.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  userName:string = ""
  userPassword:string=""

  formsGrp = new FormGroup({
    "userEmail": new FormControl("",[Validators.required,Validators.email]),
    "password" : new FormControl("",[Validators.required])
  })

 
  constructor(private _servicesData: CredentialsService,public linkRoute: Router, public _AuthSer: AuthService) { 
  }
  onRegister(){
    if(this.formsGrp.value.userEmail ===  ""){
      alert("Please provide Email")
      return
    }
    if(this.formsGrp.value.password === ""){
      alert("please provide password")
    }
    this._AuthSer.regsterUser(this.formsGrp.value.userEmail,this.formsGrp.value.password)

  }



  ngOnInit(): void {
  }

}
