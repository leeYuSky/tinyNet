import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';
import {DeviceBatteryDetailEditComponent} from './edit/edit.component';
import {DeviceBatteryDetailViewComponent} from './view/view.component';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-device-battery-detail',
  templateUrl: './battery-detail.component.html',
})
export class DeviceBatteryDetailComponent implements OnInit {
  url = '/tinyNet/device/battery/list';
  searchSchema: SFSchema = {
    properties: {
      name: {
        type: 'string',
        title: '型号名称'
      }
    }
  };
  @ViewChild('st') st: STComponent;
  columns: STColumn[] = [
    { title: '型号名称', index: 'name' , fixed: 'left', width: '100px'},
    { title: '额定电压(V)', type: 'number', index: 'eddy' },
    { title: '循环充放电效率(%)', type: 'number', index: 'xhcfdxl' },
    { title: '最大充电速率', type: 'number', index: 'zdcdsl' },
    { title: '最大充电电流(A)', type: 'number', index: 'zdcddl' },
    { title: '最大放电速率', type: 'number', index: 'zdfdsl' },
    { title: '电池容量(Ah)', type: 'number', index: 'dcrl' },
    { title: '寿命(年)', type: 'number', index: 'life' },
    { title: '全寿命放电量(kWh)', type: 'number', index: 'qsmfd' },
    { title: '串联个数', type: 'number', index: 'clgs' },
    { title: '制造商', index: 'factory' },
    { title: '类型', index: 'type'},
    {
      title: '',
      fixed: 'right', width: '120px',
      buttons: [
        { text: '<i class="anticon anticon-file-text"></i>', type: 'static',
          component: DeviceBatteryDetailViewComponent,
          click: (item: any) => console.log('查看成功' + item.name)
        },
        { text: '<i class="anticon anticon-edit"></i>',
          type: 'static', component: DeviceBatteryDetailEditComponent,
          click: 'reload'
        },
        { text: '<i class="anticon anticon-delete"></i>',
          type: 'del',
          click: (record, modal, comp) => {
            this.http
              .post('/tinyNet/device/battery/delete', {id : record.id})
              .subscribe(res => {
                this.msgSrv.success(`成功删除 ${record.name}`);
                // comp.removeRow(record);
                comp.reload();
              });
          }
        },
      ]
    }
  ];

  constructor(private http: _HttpClient,
              private modal: ModalHelper,
              private msgSrv: NzMessageService) { }

  ngOnInit() { }

  add() {
    this.modal
      .createStatic(DeviceBatteryDetailEditComponent, { i: { id: 0 } })
      .subscribe(() => this.st.reload());
  }

}
