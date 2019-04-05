import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { Router } from '@angular/router';

@Component({
  selector: 'app-network-project-details',
  templateUrl: './project-details.component.html',
})
export class NetworkProjectDetailsComponent implements OnInit {

  tagCheck1 = false;
  tagCheck2 = false;
  tagCheck3 = false;

  items = [1, 2, 3, 4];

  constructor(
    private http: _HttpClient,
    private router: Router
  ) { }

  ngOnInit() { }

  generateNewProject() {
    this.router.navigateByUrl('/network/generateProject');
  }

  checkChange (event, index) {
    console.log(event + ' - ' + index);
    if (index === 1) {
      if (event === true) {
        this.tagCheck2 = true;
        this.tagCheck3 = true;
      } else {
        this.tagCheck2 = false;
        this.tagCheck3 = false;
      }
    } else if (index === 2) {
      if (event === false) {
        this.tagCheck1 = false;
      } else {
        if (this.tagCheck3 === true) {
          this.tagCheck1 = true;
        }
      }
    } else {
      if (event === false) {
        this.tagCheck1 = false;
      } else {
        if (this.tagCheck2 === true) {
          this.tagCheck1 = true;
        }
      }
    }
  }

}
