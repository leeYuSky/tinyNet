import { Component, OnInit } from '@angular/core';
import { NzModalRef, NzMessageService } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-network-select-view',
  templateUrl: './view.component.html',
})
export class NetworkSelectViewComponent implements OnInit {
  record: any = {};
  title;
  i: any = 1;

  constructor(
    private modal: NzModalRef,
    public msgSrv: NzMessageService,
    public http: _HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get(`/user/${this.record.id}`).subscribe(res => this.i = res);
  }

  close() {
    this.modal.destroy();
  }
}
