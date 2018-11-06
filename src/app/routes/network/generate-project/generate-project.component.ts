import {Component, OnInit, ViewChild} from '@angular/core';
import { _HttpClient } from '@delon/theme';


import { NetworkDesignComponent } from '../design/design.component';
import { ReuseTabService } from '@delon/abc';
import {NzModalService} from "ng-zorro-antd";

@Component({
  selector: 'app-network-generate-project',
  templateUrl: './generate-project.component.html',
  styleUrls: ['./generate-project.component.css']
})
export class NetworkGenerateProjectComponent implements OnInit {

  @ViewChild(NetworkDesignComponent) networkDesignComponent: NetworkDesignComponent;

  checkOptions: any;
  radioValue: any;
  allCheckOptions: any;

  current = 0;

  index = 'First-content';

  constructor(
    private http: _HttpClient,
    private reuseTabService: ReuseTabService,
    private modalService: NzModalService,
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

    if ( this.current === 0) {
      const temp_checkOption = this.networkDesignComponent.current_checkOptions;
      const temp_radioValue = this.networkDesignComponent.radioValue;
      if (temp_checkOption.has('1_2')) {
        if ( !temp_checkOption.has('4_6') && !temp_checkOption.has('4_7')) {
          this.modalService.error({
            nzTitle: '选择错误',
            nzContent: '<b>电制冷机</b>与<b>吸收式制冷机</b>至少包含一个',
            nzWidth: '650'
          });
          console.log('电制冷机 与 吸收式制冷机 至少包含一个');
          return;
        }
      }
      if (temp_checkOption.has('1_3')) {
        if ( !temp_checkOption.has('4_2') && !temp_checkOption.has('4_3') && !temp_checkOption.has('4_4') && !temp_checkOption.has('4_5')) {
          this.modalService.error({
            nzTitle: '选择错误',
            nzContent: '<b>燃气锅炉</b>、<b>热泵</b>、<b>电锅炉</b>与<b>热交换装置</b>至少包含一个',
            nzWidth: '650'
          });
          console.log('燃气锅炉、热泵、电锅炉 与 热交换装置 至少包含一个');
          return;
        }
      }
      if (temp_radioValue === 'B') {
        if (!temp_checkOption.has('3_1') && !temp_checkOption.has('3_2') && !temp_checkOption.has('3_3') && !temp_checkOption.has('4_1')) {
          this.modalService.error({
            nzTitle: '选择错误',
            nzContent: '<b>电池储能系统</b>、<b>蓄冰装置</b>、<b>储热装置</b>与<b>常规发电机</b>至少包含一个',
            nzWidth: '650'
          });
          console.log('电池储能系统、蓄冰装置、储热装置 与 常规发电机 至少包含一个');
          return;
        }
      } else {
        if (!temp_checkOption.has('3_1')  && !temp_checkOption.has('4_1')) {
          this.modalService.error({
            nzTitle: '选择错误',
            nzContent: '<b>电池储能系统</b>与<b>常规发电机</b>至少包含一个',
            nzWidth: '650'
          });
          console.log('电池储能系统 与 常规发电机 至少包含一个');
          return;
        }
      }
    }
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

  getAllCheckOptions(event) {
    this.allCheckOptions = event;
  }
}
