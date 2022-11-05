import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { FirestoreService } from '../firestore.service';
import { AuthService } from '../Services/auth.service';
import { Student } from '../student';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {
  studentsList :Student[] = []
  displayedColumns:any = ["Firstname","Lastname","MobileNo","Action"]
  dataSource = new MatTableDataSource()
  constructor(public routing : Router,private _AuthSer:AuthService,public fireStr:FirestoreService){ }
  getStudentData(){
    this.fireStr.getAllStudentsData().subscribe((res:any) => {
      this.studentsList = res.map((x:any)=>{
        const data = x.payload.doc.data()
        data.id = x.payload.doc.id
        return data
      })
    },err => {
      alert("Something went wrong")
    })
  }

  onDElete(element:Student){
    if(window.confirm(`Are you willing to delete the data of ${element.firstName} ${element.lastName}`)){
      this.fireStr.deleteStudent(element)
    }
  }
  ngOnInit(): void {
    this.getStudentData()
  }

}
