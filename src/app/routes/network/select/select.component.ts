import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {_HttpClient, ModalHelper} from '@delon/theme';
import { NetworkSelectBatteryViewComponent } from './view/battery-view.component';
import {NzModalService} from 'ng-zorro-antd';



@Component({
  selector: 'app-network-select',
  templateUrl: './select.component.html',
  styleUrls : ['./select.component.css']
})
export class NetworkSelectComponent implements OnInit {

  @Input() radioValue: any;

  @Input() checkOptionsSet: Set<string>;

  @Input() checkOptions: any;

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
    const modal = this.modalService.create({
      nzTitle: '设备详情',
      nzContent: NetworkSelectBatteryViewComponent,
      nzComponentParams: {
        title: 'title in component',
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
          onClick: () => this.modalService.confirm({ nzTitle: 'Confirm Modal Title', nzContent: 'Confirm Modal Content' })
        },
      ]
    });

    modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));

    // Return a result when closed
    modal.afterClose.subscribe((result) => console.log('[afterClose] The result is:', result));
  }

}
