import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';
import {DeviceBatteryDetailEditComponent} from './edit/edit.component';
import {DeviceBatteryDetailViewComponent} from './view/view.component';
import {NzMessageService} from "ng-zorro-antd";

@Component({
  selector: 'app-device-battery-detail',
  templateUrl: './battery-detail.component.html',
})
export class DeviceBatteryDetailComponent implements OnInit {
  url = `/user`;
  searchSchema: SFSchema = {
    properties: {
      no: {
        type: 'string',
        title: '编号'
      }
    }
  };
  @ViewChild('st') st: STComponent;
  columns: STColumn[] = [
    { title: '编号', index: 'no' },
    { title: '调用次数', type: 'number', index: 'callNo' },
    { title: '头像', type: 'img', width: '50px', index: 'avatar' },
    { title: '时间', type: 'date', index: 'updatedAt' },
    {
      title: '',
      buttons: [
        { text: '查看', type: 'static', component: DeviceBatteryDetailViewComponent,
          click: (item: any) => `/form/${item.id}` },
        { text: '编辑', icon : 'edit', type: 'static', component: DeviceBatteryDetailEditComponent, click: 'reload' },
        { text: '删除', icon : 'delete', type: 'del', click: (record, modal, comp) => {
          this.msgSrv.success(`成功删除【${record.no}】`);
          // comp.removeRow(record);
          comp.reload();
        }},
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
