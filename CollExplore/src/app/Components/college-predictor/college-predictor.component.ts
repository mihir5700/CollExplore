import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-college-predictor',
  templateUrl: './college-predictor.component.html',
  styleUrls: ['./college-predictor.component.css'],
})
export class CollegePredictorComponent implements OnInit {
  clicked = false;
  justOpened = true;
  branchName = '';
  gotSomeResults = false;
  branches = [
    'Information Technology',
    'Computer Science and Engineering',
    'Ceramic Technology',
    'Electrical Engineering',
    'Mechanical Engineering',
  ];
  states = [
    'West Bengal',
    'Karnataka',
    'Tamil Nadu',
    'Odisha',
    'Kerala',
    'Maharashtra',
  ];

  predictorList: any = [{}];

  userInfo: any = { marks: null, state: '', branch: '' };
  ngOnInit(): void {
    this.renderer.setStyle(
      document.body,
      'background',
      'radial-gradient(white 35%, rgb(0, 247, 255))'
    );
  }
  ngOnDestroy(): void {
    this.renderer.removeStyle(document.body, 'background');
  }
  constructor(private renderer: Renderer2, private _api: ApiService) {}

  upload() {
    this._api.predictCollege(this.userInfo).subscribe((resp) => {
      if (resp.status == 0) {
        this.predictorList = [{}];
        this.gotSomeResults = false;
      } else {
        this.predictorList = resp.data;
        this.gotSomeResults = true;
      }

      this.justOpened = false;
    });
  }

  scroll(el: HTMLDivElement) {
    el.scrollIntoView({ behavior: 'smooth' });
    this.clicked = true;
  }
}
