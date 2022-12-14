import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import {Router} from '@angular/router'
import {GoogleAuthProvider} from '@angular/fire/auth'
import "firebase/auth"



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth, public routing: Router) { }
  loginUser(email:any,passowrd:any){
    this.fireAuth.signInWithEmailAndPassword(email,passowrd).then(res => {
      localStorage.setItem("token","true")
      if(res.user?.emailVerified == true){
        this.routing.navigateByUrl("/success")
      }
      else{
        alert("please register your email")
      }
    },err => {
      alert(err.message)
      this.routing.navigateByUrl("/")
    })
  }
  regsterUser(email:any,passowrd:any){
    this.fireAuth.createUserWithEmailAndPassword(email,passowrd).then(res => {
      alert("Registraion success")
      this.verifyPasMail(res.user)
    },err =>{
      alert(err.message)
      this.routing.navigateByUrl("/SignUp")
    })
  }
  logout(){
    this.fireAuth.signOut().then(() =>{
      localStorage.removeItem("token")
      this.routing.navigateByUrl("/")
    })
  }

  //foregetMail
  forgetMail(email:any){
    this.fireAuth.sendPasswordResetEmail(email).then(() => {
      alert("Redirecting to verfication page")
      this.routing.navigateByUrl("/Verfication")
    },err => {
      alert(err.message)
    })
  }

  googleSignIn(){
    this.fireAuth.signInWithPopup(new GoogleAuthProvider).then(res =>{
      this.routing.navigateByUrl("/success")
      localStorage.setItem("Token",JSON.stringify(res.user?.uid))
    },err => {
      alert("Something is wrong")
    })
  }
  verifyPasMail(user:any){
    user.sendEmailVerification().then((res:any) =>{
      this.routing.navigateByUrl("/Verfication")
    },(Err:any) => {
      alert(Err.message)
    })
  }
}
