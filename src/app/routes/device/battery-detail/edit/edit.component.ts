import { Component, OnInit, ViewChild } from '@angular/core';
import { NzModalRef, NzMessageService } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';
import {FormProperty, PropertyGroup, SFSchema, SFUISchema} from '@delon/form';

@Component({
  selector: 'app-device-battery-detail-edit',
  templateUrl: './edit.component.html',
})
export class DeviceBatteryDetailEditComponent implements OnInit {
  record: any = {};
  i: any;
  schema: SFSchema = {
    properties: {
      name: { type: 'string', title: '型号名称' },
      eddy: { type: 'string', title: '额定电压', default: 0, minimum: 0, ui: {
        // widget: 'string',
        addOnAfter: 'V',
        placeholder: '请输入数字',
      }, format: 'regex', pattern: '^0$|^([1-9][0-9]*)$|^((0|([1-9][1-9]*))\.[0-9]+)$'},
      xhcfdxl: { type: 'string', title: '循环充放电效率', default: 0, minimum: 0, ui: {
        addOnAfter: '%',
        placeholder: '请输入数字',
      }, format: 'regex', pattern: '^0$|^([1-9][0-9]*)$|^((0|([1-9][1-9]*))\.[0-9]+)$'},
      zdcdsl: { type: 'string', title: '最大充电速率', default: 0, minimum: 0,
        format: 'regex', pattern: '^0$|^([1-9][0-9]*)$|^((0|([1-9][1-9]*))\.[0-9]+)$'},
      zdcddl: { type: 'string', title: '最大充电电流', default: 0, minimum: 0, ui: {
        addOnAfter: 'A',
        placeholder: '请输入数字',
      }, format: 'regex', pattern: '^0$|^([1-9][0-9]*)$|^((0|([1-9][1-9]*))\.[0-9]+)$'},
      zdfdsl: { type: 'string', title: '最大放电速率', default: 0, minimum: 0,
        format: 'regex', pattern: '^0$|^([1-9][0-9]*)$|^((0|([1-9][1-9]*))\.[0-9]+)$'},
      dcrl: { type: 'string', title: '电池容量(Ah)',  default: 0, minimum: 0, ui: {
        addOnAfter: 'Ah',
        placeholder: '请输入数字',
      }, format: 'regex', pattern: '^0$|^([1-9][0-9]*)$|^((0|([1-9][1-9]*))\.[0-9]+)$'},
      life: { type: 'string', title: '寿命', default: 0, minimum: 0, ui: {
        addOnAfter: '年',
        placeholder: '请输入数字',
      }, format: 'regex', pattern: '^0$|^([1-9][0-9]*)$|^((0|([1-9][1-9]*))\.[0-9]+)$'},
      qsmfd: { type: 'string', title: '全寿命放电量', default: 0, minimum: 0, ui: {
        addOnAfter: 'kWh',
        placeholder: '请输入数字',
      }, format: 'regex', pattern: '^0$|^([1-9][0-9]*)$|^((0|([1-9][1-9]*))\.[0-9]+)$'},
      clgs: { type: 'string', title: '串联个数',  default: 0, minimum: 0, ui: {
        addOnAfter: '个',
        placeholder: '请输入数字',
      }, format: 'regex', pattern: '^0$|^([1-9][0-9]*)$|^((0|([1-9][1-9]*))\.[0-9]+)$'},
      factory: { type: 'string', title: '制造商', maxLength: 140 },
      type: {
        type: 'string',
        title: '类型',
        enum: [ { label: '交流', value: 0 }, { label: '直流', value: 1 } ],
        default: 0 },
      capacity1: { type: 'number', title: '个数1',  default: 0, minimum: 0 },
      cjcb1: { type: 'number', title: '初建成本1',  default: 0, minimum: 0 },
      gxcb1: { type: 'number', title: '替换成本1',  default: 0, minimum: 0 },
      yxwhcb1: { type: 'number', title: '运维成本1',  default: 0, minimum: 0 },
      capacity2: { type: 'number', title: '个数2',  default: 1, minimum: 0 },
      cjcb2: { type: 'number', title: '初建成本2',  default: 1, minimum: 0 },
      gxcb2: { type: 'number', title: '替换成本2',  default: 1, minimum: 0 },
      yxwhcb2: { type: 'number', title: '运维成本2',  default: 1, minimum: 0 },
      capacity3: { type: 'number', title: '个数3',  default: 100, minimum: 0 },
      cjcb3: { type: 'number', title: '初建成本3',  default: 10000, minimum: 0 },
      gxcb3: { type: 'number', title: '替换成本3',  default: 10000, minimum: 0 },
      yxwhcb3: { type: 'number', title: '运维成本3',  default: 10000, minimum: 0 },
      capacity4: { type: 'number', title: '个数4',  default: 10000, minimum: 0 },
      cjcb4: { type: 'number', title: '初建成本4',  default: 1000000, minimum: 0 },
      gxcb4: { type: 'number', title: '替换成本4',  default: 1000000, minimum: 0 },
      yxwhcb4: { type: 'number', title: '运维成本4',  default: 1000000, minimum: 0 },
    },
    required: ['name', 'eddy', 'xhcfdxl', 'zdcdsl', 'zdcddl', 'zdfdsl', 'dcrl', 'life', 'qsmfd', 'clgs', 'factory', 'type',
      'capacity1', 'cjcb1', 'gxcb1', 'yxwhcb1',
      'capacity2', 'cjcb2', 'gxcb2', 'yxwhcb2',
      'capacity3', 'cjcb3', 'gxcb3', 'yxwhcb3',
      'capacity4', 'cjcb4', 'gxcb4', 'yxwhcb4'],
  };
  ui: SFUISchema = {
    '*': {
      grid: { span: 12 },
      spanLabel : 10,
      spanControl : 14
    },
    '$capacity1': {grid: { span: 6 }, spanLabel : 12, spanControl : 12},
    '$cjcb1': {grid: { span: 6 }, spanLabel : 12, spanControl : 12},
    '$gxcb1': {grid: { span: 6 }, spanLabel : 12, spanControl : 12 },
    '$yxwhcb1': { grid: { span: 6 }, spanLabel : 12, spanControl : 12},
    '$capacity2': {grid: { span: 6 }, spanLabel : 12, spanControl : 12},
    '$cjcb2': {grid: { span: 6 }, spanLabel : 12, spanControl : 12},
    '$gxcb2': {grid: { span: 6 }, spanLabel : 12, spanControl : 12 },
    '$yxwhcb2': { grid: { span: 6 }, spanLabel : 12, spanControl : 12},
    '$capacity3': {grid: { span: 6 }, spanLabel : 12, spanControl : 12},
    '$cjcb3': {grid: { span: 6 }, spanLabel : 12, spanControl : 12},
    '$gxcb3': {grid: { span: 6 }, spanLabel : 12, spanControl : 12 },
    '$yxwhcb3': { grid: { span: 6 }, spanLabel : 12, spanControl : 12},
    '$capacity4': {grid: { span: 6 }, spanLabel : 12, spanControl : 12},
    '$cjcb4': {grid: { span: 6 }, spanLabel : 12, spanControl : 12},
    '$gxcb4': {grid: { span: 6 }, spanLabel : 12, spanControl : 12 },
    '$yxwhcb4': { grid: { span: 6 }, spanLabel : 12, spanControl : 12},
  };

  constructor(
    private modal: NzModalRef,
    public http: _HttpClient,
    private msgSrv: NzMessageService
  ) {}

  ngOnInit(): void {
    if (this.record.id) {
      // this.http.get(`/user/${this.record.id}`).subscribe(res => (this.i = res));
      this.http
        .post('/tinyNet/device/battery/select', {id : this.record.id})
        .subscribe(res => {
          if (res['type'] === '交流') {
            res['type'] = 0;
          } else if (res['type'] === '直流') {
            res['type'] = 1;
          }
          this.i = res;
        });
    }
  }

  save(value: any) {
    // 如果存在 record 记录，则做更新操作，否则为新建操作
    if (this.record.id) {
      this.http
        .post('/tinyNet/device/battery/update', {battery : value})
        .subscribe(
          res => {
            this.msgSrv.success('更新成功');
            this.modal.close(true);
          },
          error => {
            this.msgSrv.error('更新失败');
            this.modal.close(true);
          });
    } else {
      this.http
        .post('/tinyNet/device/battery/add', {battery : value})
        .subscribe(
          res => {
            this.msgSrv.success('添加成功');
            this.modal.close(true);
          },
          error => {
            this.msgSrv.error('添加失败');
            this.modal.close(true);
          });
    }
  }

  close() {
    this.modal.destroy();
  }
}
