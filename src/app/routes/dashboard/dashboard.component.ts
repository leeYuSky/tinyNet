import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { ReuseTabService } from '@delon/abc';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  constructor(
    private http: _HttpClient,
    private reuseTabService: ReuseTabService
  ) {

  }

  ngOnInit() {
    this.reuseTabService.closable = false;
  }


  _onReuseInit() {
    console.log('_onReuseInit');
  }
  _onReuseDestroy() {
    console.log('_onReuseDestroy');
  }


}
