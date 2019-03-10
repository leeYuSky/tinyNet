import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {_HttpClient, ModalHelper} from '@delon/theme';
import { NetworkSelectBatteryViewComponent } from './view/battery-view.component';
import {NzModalService} from 'ng-zorro-antd';
import {NetworkSelectTurbineComponent} from "./turbine/turbine.component";



@Component({
  selector: 'app-network-select',
  templateUrl: './select.component.html',
  styleUrls : ['./select.component.css']
})
export class NetworkSelectComponent implements OnInit {

  @Input() radioValue: any;

  @Input() checkOptionsSet: Set<string>;

  @Input() checkOptions: any;


  select_device_data = {
    dianwang : { data : null },
    guangziyuan : { data : null },
    guangfuzhenlie : { data : null },
    fengziyuan : { data : null },
    fenglifadianji : { data : null },
    shuiziyuan : { data : null },
    turbine : { data : null },
    changguifadianji : { data : null },
    ranqilunji : { data : null },
    battery : { data : null },
    dianfuhe : { data : null },
    dianzhilengji : { data : null },
    shuanggongkuangzhuji : { data : null },
    xubingzhuangzhi : { data : null },
    rebeng : { data : null },
    dianguolu : { data : null },
    xiulihuakongtiao : { data : null },
    yureguolu : { data : null },
    ranqiguolu : { data : null },
    lengfuhe : { data : null },
    refuhe : { data : null },
    xurezhuangzhi : { data : null }
  };

  i = 1;

  constructor(
    private http: _HttpClient,
    private modalService: NzModalService,
    private el: ElementRef,
  ) { }

  ngOnInit() {
    console.log('NetworkSelectComponent init');
    console.log(this.checkOptionsSet);
  }

  hello(name) {
    console.log(name);
    let temp;
    switch (name) {
      case 'dianchi':
        temp = NetworkSelectBatteryViewComponent;
        break;
      case 'shuilifadianji':
        temp = NetworkSelectTurbineComponent;
        break;
      default:
        break;
    }
    const modal = this.modalService.create({
      nzTitle: '设备详情',
      nzContent: temp,
      nzComponentParams: {
        title: name,
        record: {
          id: 1
        }
      },
      nzGetContainer: this.el.nativeElement.querySelector('#battery-view'),
      nzMaskClosable: false,
      nzWidth: '90%',
      nzFooter: [
        {
          label: '关闭',
          shape: 'default',
          onClick: () => modal.destroy()
        },
        {
          label: '确认',
          type: 'primary',
          onClick: () => {
            this.modalService.confirm({
              nzTitle: '提交',
              nzContent: '是否确认选择？',
              nzOnOk: () => modal.getContentComponent().close()
            });
          }
        },
      ]
    });

    modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));

    // Return a result when closed
    modal.afterClose.subscribe((result) => {
      console.log('[afterClose] The result is:', result);
      if (result) {
        switch (result['device']) {
          case 'dianchi':
            if (result['data']['battery_ids'].length > 0) {
              this.select_device_data.battery.data = result['data'];
            } else {
              console.log('数据不合法');
            }
            break;
          case 'shuilifadianji':
            if (result['data']['turbine_ids'].length > 0) {
              this.select_device_data.turbine.data = result['data'];
            } else {
              console.log('数据不合法');
            }
          default:
            break;
        }
      }
      console.log(this.select_device_data);
    });
  }

}
