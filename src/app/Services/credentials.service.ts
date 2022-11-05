import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CredentialsService {

  constructor(private _http:HttpClient) { }
  saveData(data: any[]){
    return this._http.post("https://newpro-d0492-default-rtdb.firebaseio.com/data.json",data)
  }
  giveData(){
    return this._http.get("https://newpro-d0492-default-rtdb.firebaseio.com/data.json")
  }
}
