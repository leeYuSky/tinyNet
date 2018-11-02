import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';

 // 自己导入的
import * as svgPanZoom from 'assets/js/svg-pan-zoom.min.js';

@Component({
  selector: 'app-network-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css'],
})
export class NetworkDesignComponent implements OnInit, OnDestroy {

  @Input() default_checkOptions: Set<string>;

  @Input() default_radioValue: any;

  @Output() checkOptionsEmitter = new EventEmitter<Set<string>>();

  @Output() radioValueEmitter = new EventEmitter<string>();

  current_checkOptions = new Set();

  zoomSvg: any;

  radioValue: string;

  checkOptions = {
    checkOptionsOne_load: [
      { label: '首要负荷', value: '1_1', checked: false },
      { label: '冷负荷', value: '1_2', checked: false },
      { label: '热负荷', value: '1_3', checked: false }
    ],
    checkOptionsOne_renewable_energy: [
      { label: '风力发电机', value: '2_1', checked: false },
      { label: '光伏阵列', value: '2_2', checked: false },
      { label: '水力发电机', value: '2_3', checked: false }
    ],
    checkOptionsOne_stored_energy: [
      { label: '电池储能系统', value: '3_1', checked: false },
      { label: '蓄冰装置', value: '3_2', checked: false },
      { label: '储热装置', value: '3_3', checked: false }
    ],
    checkOptionsOne_component: [
      { label: '常规发电机', value: '4_1', checked: false },
      { label: '燃气锅炉', value: '4_2', checked: false },
      { label: '热泵', value: '4_3', checked: false },
      { label: '电锅炉', value: '4_4', checked: false },
      { label: '热交换装置', value: '4_5', checked: false },
      { label: '电制冷机', value: '4_6', checked: false },
      { label: '吸收式制冷机', value: '4_7', checked: false }
    ],
  };

  checkOptionsMapping = [
    'checkOptionsOne_load',
    'checkOptionsOne_renewable_energy',
    'checkOptionsOne_stored_energy',
    'checkOptionsOne_component'
  ];

  init_checkOptions = new Set(['1_1', '2_1', '2_2', '2_3', '3_1', '4_1']);
  init_radioValue = 'A';

  // 负荷 多选框
  allChecked_load = false;
  indeterminate_load = false;

  // 可再生能源 多选框
  allChecked_renewable_energy = false;
  indeterminate_renewable_energy = false;

  // 储能 多选框
  allChecked_stored_energy = false;
  indeterminate_stored_energy = false;

  // 元件 多选框
  allChecked_component = false;
  indeterminate_component = false;


  constructor(private http: _HttpClient, private modal: ModalHelper) { }

  ngOnInit() {
    console.log('NetworkDesignComponent init');
    this.zoomSvg = svgPanZoom('#xianlutu', {
      zoomEnabled: true,
      controlIconsEnabled: true,
      fit: false,
      center: true,
      zoomScaleSensitivity: 0.5,
      dblClickZoomEnabled: false
    });
    this.setDefaultValues();
  }

  ngOnDestroy() {
    this.checkOptionsEmitter.emit(this.current_checkOptions);
    this.radioValueEmitter.emit(this.radioValue);
    console.log('NetworkDesignComponent Destroy');
  }



  _onReuseInit() {
    console.log('_onReuseInit');
  }

  hello(name) {
    console.log(name);
  }

  add() {
    // this.modal
    //   .createStatic(FormEditComponent, { i: { id: 0 } })
    //   .subscribe(() => this.st.reload());
  }

  /**
   * 负荷 多选框的全选框的回调事件
   */
  updateAllChecked_load(): void {
    this.indeterminate_load = false;
    if (this.allChecked_load) {
      this.checkOptions.checkOptionsOne_load.forEach(item => {
        item.checked = true;
        this.current_checkOptions.add(item.value);
      });
      console.log(this.current_checkOptions);
    } else {
      this.checkOptions.checkOptionsOne_load.forEach(item => {
        item.checked = false;
        this.current_checkOptions.delete(item.value);
      });
      console.log(this.current_checkOptions);
    }
  }

  updateSingleChecked_load(event, value): void {
    if (event === true) {
      this.current_checkOptions.add(value);
    } else {
      this.current_checkOptions.delete(value);
    }
    if (this.checkOptions.checkOptionsOne_load.every(item => item.checked === false)) {
      this.allChecked_load = false;
      this.indeterminate_load = false;
    } else if (this.checkOptions.checkOptionsOne_load.every(item => item.checked === true)) {
      this.allChecked_load = true;
      this.indeterminate_load = false;
    } else {
      this.indeterminate_load = true;
    }
    console.log(this.current_checkOptions);
  }

  /**
   * 可再生能源 多选框的全选框的回调事件
   */
  updateAllChecked_renewable_energy(): void {
    this.indeterminate_renewable_energy = false;
    if (this.allChecked_renewable_energy) {
      this.checkOptions.checkOptionsOne_renewable_energy.forEach(item => {
        item.checked = true;
        this.current_checkOptions.add(item.value);
      });
      console.log(this.current_checkOptions);
    } else {
      this.checkOptions.checkOptionsOne_renewable_energy.forEach(item => {
        item.checked = false;
        this.current_checkOptions.delete(item.value);
      });
      console.log(this.current_checkOptions);
    }
  }

  updateSingleChecked_renewable_energy(event, value): void {
    if (event === true) {
      this.current_checkOptions.add(value);
    } else {
      this.current_checkOptions.delete(value);
    }
    if (this.checkOptions.checkOptionsOne_renewable_energy.every(item => item.checked === false)) {
      this.allChecked_renewable_energy = false;
      this.indeterminate_renewable_energy = false;
    } else if (this.checkOptions.checkOptionsOne_renewable_energy.every(item => item.checked === true)) {
      this.allChecked_renewable_energy = true;
      this.indeterminate_renewable_energy = false;
    } else {
      this.indeterminate_renewable_energy = true;
    }
    console.log(this.current_checkOptions);
  }

  /**
   * 储能 多选框的全选框的回调事件
   */
  updateAllChecked_stored_energy(): void {
    this.indeterminate_stored_energy = false;
    if (this.allChecked_stored_energy) {
      this.checkOptions.checkOptionsOne_stored_energy.forEach(item => {
        item.checked = true;
        this.current_checkOptions.add(item.value);
      });
      console.log(this.current_checkOptions);
    } else {
      this.checkOptions.checkOptionsOne_stored_energy.forEach(item => {
        item.checked = false;
        this.current_checkOptions.delete(item.value);
      });
      console.log(this.current_checkOptions);
    }
  }

  updateSingleChecked_stored_energy(event, value): void {
    if (event === true) {
      this.current_checkOptions.add(value);
    } else {
      this.current_checkOptions.delete(value);
    }
    if (this.checkOptions.checkOptionsOne_stored_energy.every(item => item.checked === false)) {
      this.allChecked_stored_energy = false;
      this.indeterminate_stored_energy = false;
    } else if (this.checkOptions.checkOptionsOne_stored_energy.every(item => item.checked === true)) {
      this.allChecked_stored_energy = true;
      this.indeterminate_stored_energy = false;
    } else {
      this.indeterminate_stored_energy = true;
    }
    console.log(this.current_checkOptions);
  }

  /**
   * 元件 多选框的全选框的回调事件
   */
  updateAllChecked_component(): void {
    this.indeterminate_component = false;
    if (this.allChecked_component) {
      this.checkOptions.checkOptionsOne_component.forEach(item => {
        item.checked = true;
        this.current_checkOptions.add(item.value);
      });
      console.log(this.current_checkOptions);
    } else {
      this.checkOptions.checkOptionsOne_component.forEach(item => {
        item.checked = false;
        this.current_checkOptions.delete(item.value);
      });
      console.log(this.current_checkOptions);
    }
  }

  updateSingleChecked_component(event, value): void {
    if (event === true) {
      this.current_checkOptions.add(value);
    } else {
      this.current_checkOptions.delete(value);
    }
    if (this.checkOptions.checkOptionsOne_component.every(item => item.checked === false)) {
      this.allChecked_component = false;
      this.indeterminate_component = false;
    } else if (this.checkOptions.checkOptionsOne_component.every(item => item.checked === true)) {
      this.allChecked_component = true;
      this.indeterminate_component = false;
    } else {
      this.indeterminate_component = true;
    }
    console.log(this.current_checkOptions);
  }

  /**
   * 设置该页面的默认值或初始值
   * ［默认值］ 在页面切换时，会导致页面子组件的重新加载，因此该值保存了之前选定的数据
   * ［初始值］ 最开始默认的值
   */
  setDefaultValues() {
    if (!this.default_radioValue) {
      this.radioValue = this.init_radioValue;
    } else {
      this.radioValue = this.default_radioValue;
    }

    if (!this.default_checkOptions) {
      this.init_checkOptions.forEach((value, key) => {
        this.parseAndAddValue(value);
      });
    } else {
      this.default_checkOptions.forEach((value, key) => {
        this.parseAndAddValue(value);
      });
    }
  }

  /**
   * 1. 解析 checkOption 的value
   * 2. 将该 checkOption 置为选中状态
   * 3. 改变全选框的状态
   */
  parseAndAddValue(value) {
    const temp = value.split('_');
    const a = parseInt(temp[0], 10);
    const b = parseInt(temp[1], 10);
    this.checkOptions[this.checkOptionsMapping[a - 1]][b - 1]['checked'] = true;
    if (a === 1) {
      this.updateSingleChecked_load(true, value);
    } else if (a === 2) {
      this.updateSingleChecked_renewable_energy(true, value);
    } else if (a === 3) {
      this.updateSingleChecked_stored_energy(true, value);
    } else {
      this.updateSingleChecked_component(true, value);
    }
  }

}
