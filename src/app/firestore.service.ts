import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestr: AngularFirestore) { 
  }

  addStudents(student:Student){
    student.id = this.firestr.createId()
    return this.firestr.collection('/student').add(student)
  }

  getAllStudentsData(){
    return this.firestr.collection('/student').snapshotChanges()
  }

  deleteStudent(student:Student){
    this.firestr.doc('/student/'+student.id).delete()
  }

  updateStudent(student:Student){
    this.deleteStudent(student)
    this.addStudents(student)
  }
}
