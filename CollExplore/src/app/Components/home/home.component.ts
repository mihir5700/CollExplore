import { Component, OnInit, Renderer2 } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  searchResVis = false;
  collegeDetails: any = [{}];
  allColleges: any = [];
  collegeData = {
    collegeName: '',
  };

  constructor(
    private renderer: Renderer2,
    private _api: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._api.getallColleges().subscribe((res) => {
      for (let index = 0; index < res.data.length; index++) {
        this.allColleges.push(res.data[index].college_name);
      }
    });
  }

  onSearchBtn() {
    this.searchResVis = true;

    this._api.getCollegePage(this.collegeData).subscribe(
      (res) => {
        this.collegeDetails = res.data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  scroll(el: HTMLDivElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
