import { Component, OnInit, Renderer2 } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  close=true;
  viewPassIcon=false;
  viewPassword=false;
  counter!: number;
  tryagain = false;
  submitted = false;
  loginUserData = { email: '', password: '' };
  constructor(
    private _auth: AuthService,
    private _router: Router,
    private renderer: Renderer2
  ) {}
  ngOnInit(): void {
    this.counter = 0;
    this.renderer.setStyle(
      document.body,
      'background',
      'radial-gradient(white 35%, rgb(0, 247, 255))'
    );
  }

  ngOnDestroy(): void {
    this.renderer.removeStyle(document.body, 'background');
  }

  loginUser() {
    this._auth.loginUser(this.loginUserData).subscribe(
      (res) => {
        if (res.status === 0) {
          this.tryagain = true;
          this.counter = 1;
        } else {
          this.submitted = true;
          localStorage.setItem('token', res.token),
            localStorage.setItem('user_id', res.data[0].user_id),
            this._router.navigate(['']).then(() => {
              window.location.reload();
            });
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  login() {
    window.location.reload();
  }
  register() {
    this._router.navigate(['/register']);
  }

  showPass(){
    this.viewPassIcon=!this.viewPassIcon;
    this.viewPassword=!this.viewPassword;
  } 

  closeit(){
    this.tryagain=!this.tryagain
  }
}
