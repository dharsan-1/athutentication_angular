import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';
import { CredentialsService } from '../Services/credentials.service';
import { FirestoreService } from '../firestore.service';
import { Student } from '../student';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  constructor(private routing : Router, public _Authentication : AuthService,private _serviceData:CredentialsService,private fireStr: FirestoreService){ 
  }
  stuObj : any = {
    id: "",
    firstName: "",
    lastName:"",
    mobile_no : ""
  }

  formsGrp = new FormGroup({
    "userFirstName" : new FormControl("",[Validators.required]),
    "userLastName" : new FormControl("",[Validators.required]),
    "userMobileNo": new FormControl("",Validators.required)

  })


  studentLogin:Student[] = []

  onLogout(){
    this._Authentication.logout()
    this.routing.navigateByUrl("/")
  } 

  onAddStudent(){
    if(this.formsGrp.value.userFirstName == "" || this.formsGrp.value.userLastName == "" || this.formsGrp.value.userMobileNo == ""){
      alert("give the valid details")
    }
    this.stuObj.id = ''
    this.stuObj.firstName = this.formsGrp.value.userFirstName
    this.stuObj.lastName = this.formsGrp.value.userLastName
    this.stuObj.mobile_no = this.formsGrp.value.userMobileNo
    this.fireStr.addStudents(this.stuObj)
  }
  ngOnInit(): void {
  }
  onDeleteStudent(student:Student){
    if(window.confirm(`Are going to delete ${student.firstName} ${student.lastName}`)){
      this.fireStr.deleteStudent(student)
    }
  }
  onLogOut(){
    this._Authentication.logout()
  }


}
