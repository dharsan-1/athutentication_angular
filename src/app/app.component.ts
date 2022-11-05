import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {AngularFireModule} from '@angular/fire/compat'
import '@firebase/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Angular_authentication';
  user_data = {id:1,userName:"dharsan",password:"Dharsan01"}
  user_message = ""
  onClickSave(){
    localStorage.setItem("session_1",JSON.stringify(this.user_data))
    this.user_message = "data saved"
  }
  ngOnInit(): void {
    const fireBaseKey = {
      apiKey:"AIzaSyBi191D3PmxOagFS6ol04ZY5vLt6IQQ0SY"
    }
    AngularFireModule.initializeApp(fireBaseKey)

  }
}
