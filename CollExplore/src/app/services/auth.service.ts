import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private _url="https://astounding-profiterole-7cefd9.netlify.app/"
  bool=false;

  constructor(private http:HttpClient , private _router:Router) { }

  registerUser(user: any){
    return this.http.post<any>(this._url+"/register",user)
  }

  loginUser(user: any){
    return this.http.post<any>(this._url+"/login",user)
  }

 

  loggedIn(){  
    return !!localStorage.getItem('token')
  }

 
  authenticate():Observable<any>{
    return this.http.get(this._url+"/authenticate")
  }


  getToken() {
    return localStorage.getItem('token');
}

logOut1(){
  localStorage.removeItem('token');
  localStorage.removeItem('user_id');
  this._router.navigate([''])
  .then(() => {
    window.location.reload();
  });
  // window.location.reload();

}
logOut2(){
  localStorage.removeItem('token');
  localStorage.removeItem('user_id');
  this._router.navigate(['/login'])
  .then(() => {
    window.location.reload();
  });

}
}