import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-network-control',
  templateUrl: './control.component.html',
})
export class NetworkControlComponent implements OnInit {

  constructor(private http: _HttpClient) { }

  ngOnInit() { }

}
