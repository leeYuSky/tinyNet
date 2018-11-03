import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import {ReuseTabService} from '@delon/abc';

@Component({
  selector: 'app-network-result',
  templateUrl: './result.component.html',
})
export class NetworkResultComponent implements OnInit {

  constructor(
    private http: _HttpClient,
    private reuseTabService: ReuseTabService,
  ) { }

  ngOnInit() { }

  closeOf4Phase() {
    this.reuseTabService.close('/network/generateProject');
  }

}
