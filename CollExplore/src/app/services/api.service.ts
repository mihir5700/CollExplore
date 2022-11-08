import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _getCollegeUrl="http://localhost:8080/api/get-college";
  // private _collegeName = "";
  constructor(private _http:HttpClient) { 
  }

  predictCollege(data:any):Observable<any>{
    return this._http.post("http://localhost:8080/api/predict-college", data)
  }
  getallColleges():Observable<any>{
    return this._http.get("http://localhost:8080/api/get-all-colleges")
  }

  getCollegePage(data: any):Observable<any>{
    return this._http.post(this._getCollegeUrl, data);
  }

  getUserName(data:any):Observable<any>{
    console.log(data);
    return this._http.post("http://localhost:8080/api/getUsername", {data:data})
  }

}
