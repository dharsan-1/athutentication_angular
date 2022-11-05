import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../Services/auth.service';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  userName: any = ''

  constructor(public _AuthSer: AuthService) { }

  Formgrp = new FormGroup({
    "userEmail":new FormControl("",[Validators.required,Validators.email])
  })
  onSubmit(){
    this._AuthSer.forgetMail(this.Formgrp.value.userEmail)
    this.Formgrp.clearValidators
  }

  ngOnInit(): void {
  }

}
