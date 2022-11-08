import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username:any;
  user_id=localStorage.getItem('user_id');

  constructor(public _authService:AuthService,private _apiService:ApiService) {}

  ngOnInit(): void { 
    this.username=this._apiService.getUserName(this.user_id).subscribe(
      res=>{this.username=res.data[0].user_name;
      }
    )   
  }


}