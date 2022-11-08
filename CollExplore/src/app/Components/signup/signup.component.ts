import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  viewPassIcon=false;
  viewPassword=false;
  registerUserData={username:"",email:"",password:""};
  
  constructor(private _auth:AuthService,private _router:Router,private renderer: Renderer2 ) { }
  submitted=false;
  
  ngOnInit(): void {
      this.renderer.setStyle(document.body, 'background', "radial-gradient(white 35%, rgb(0, 247, 255))");
  }
  ngOnDestroy(): void{
    this.renderer.removeStyle(document.body, 'background');
  }

  registerUser(){

    this.submitted=true;
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res=>{
        localStorage.setItem('token',res.token),
        localStorage.setItem('user_id',res.user_id),

        this._router.navigate(['']).then(() => {
          window.location.reload();
        });
      },
      err=>{console.log(err)}
    )
  }

  showPass(){
    this.viewPassIcon=!this.viewPassIcon;
    this.viewPassword=!this.viewPassword;
  }
  

}
