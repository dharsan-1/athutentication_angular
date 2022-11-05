import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SuccessComponent } from './success/success.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { VerificationMalilComponent } from './verification-malil/verification-malil.component'
import { ShowDataComponent } from './show-data/show-data.component';


const routes: Routes = [{path:"",component:LoginComponent},{path:"SignUp" ,component:SignUpComponent},{path:"success",component:SuccessComponent},
{path:"ForgertPass",component:ForgetPasswordComponent},{path:"Verfication" , component:VerificationMalilComponent},{path:"show",component:ShowDataComponent},{path:"**",redirectTo:"/"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const allAppRouting = [LoginComponent,SignUpComponent,SuccessComponent,ForgetPasswordComponent,VerificationMalilComponent,ShowDataComponent]
