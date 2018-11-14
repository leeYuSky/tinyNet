import {Component, Input, OnInit} from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-network-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class NetworkControlComponent implements OnInit {

  @Input() radioValue: string;

  // strategy_radioValue;
  // strategy_radioValue_all = 'strategy0';
  strategy_internal = true;
  strategy_internal_rate: any;
  strategy_pollution = true;
  strategy_pollution_rate: any;

  form_data =  {
    system : {
      strategy_radioValue : 'strategy1',
      strategy_radioValue_all : 'strategy0',
      strategy_internal_rate : '0.00',
      strategy_pollution_rate : '0.00',
      buy_constraint_1 : '0.00',
      sell_constraint_2 : '0.00'
    },
  };

  constructor(private http: _HttpClient) { }

  ngOnInit() { }

  getData() {
    console.log(this.form_data);
  }

}
