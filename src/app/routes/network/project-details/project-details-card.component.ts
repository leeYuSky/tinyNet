/**
 * Created by liyuze on 19/4/4.
 */

import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {_HttpClient} from '@delon/theme';

@Component({
  selector: 'app-project-details-card',
  templateUrl: './project-details-card.component.html'
})
export class NetworkProjectDetailsCardComponent implements OnInit {

  @Input() recordDate;


  constructor(
    private http: _HttpClient,
    private router: Router
  ) {}

  ngOnInit() { }


}
