import {Component, OnInit, ViewChild} from '@angular/core';
import { _HttpClient } from '@delon/theme';


import { NetworkDesignComponent } from '../design/design.component';
import { ReuseTabService } from '@delon/abc';

@Component({
  selector: 'app-network-generate-project',
  templateUrl: './generate-project.component.html',
  styleUrls: ['./generate-project.component.css']
})
export class NetworkGenerateProjectComponent implements OnInit {

  // @ViewChild(NetworkDesignComponent) networkDesignComponent: NetworkDesignComponent;

  checkOptions: any;
  radioValue: any;

  current = 0;

  index = 'First-content';

  constructor(
    private http: _HttpClient,
    private reuseTabService: ReuseTabService
  ) { }

  ngOnInit() {
    this.reuseTabService.title = '新建方案';
  }


  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    /*
      该方法本身用来处理父组件获得子组件app-network-design的设置参数，
      但是由于该组件在步骤条切换时会 destroy 及重新 init，
      故可以使用生命周期方法ngOnDestroy()，在组件destroy时将设置参数发送到父组件，
      因此该方法留以备用
     */
    // if (this.current === 0) {
    //   this.checkOptions = this.networkDesignComponent.current_checkOptions;
    //   this.radioValue = this.networkDesignComponent.radioValue;
    //   console.log(this.checkOptions);
    // }
    this.current += 1;
    this.changeContent();
  }

  done(): void {
    this.current += 1;
    this.changeContent();
    console.log('done');
  }

  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.index = 'First-content';
        break;
      }
      case 1: {
        this.index = 'Second-content';
        break;
      }
      case 2: {
        this.index = 'third-content';
        break;
      }
      default: {
        this.index = 'error';
      }
    }
  }


  getCheckOptions(event) {
    this.checkOptions = event;
    console.log(this.checkOptions);
  }

  getRadioValue(event) {
    this.radioValue = event;
    console.log(this.radioValue);
  }
}
