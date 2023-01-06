import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private _url="https://astounding-profiterole-7cefd9.netlify.app/"
  constructor(private _http:HttpClient) { 
  }

  predictCollege(data:any):Observable<any>{
    return this._http.post(this._url+"/predict-college", data)
  }
  getallColleges():Observable<any>{
    return this._http.get(this._url+"/get-all-colleges")
  }

  getCollegePage(data: any):Observable<any>{
    return this._http.post(this._url+"/get-college", data);
  }
  getUserName(data:any):Observable<any>{
    console.log(data);
    return this._http.post(this._url+"/getUsername", {data:data})
  }

}