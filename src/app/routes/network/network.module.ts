import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { NetworkRoutingModule } from './network-routing.module';
import { NetworkDesignComponent } from './design/design.component';
import { NetworkGenerateProjectComponent } from './generate-project/generate-project.component';
import { NetworkSelectComponent } from './select/select.component';
import { NetworkSelectBatteryViewComponent } from './select/view/battery-view.component';
import { NetworkControlComponent } from './control/control.component';
import { NetworkResultComponent } from './result/result.component';
import { ViserModule } from 'viser-ng';
import { NetworkSelectBatteryLinechartComponent } from './select/view/battery-linechart.component'; // 导入 viser 模块
import { G2BarModule} from '@delon/chart';
// import {BatteryLinehartHostDirective} from "./select/view/battery-linechart-host.directive";

const COMPONENTS = [
  NetworkDesignComponent,
  NetworkGenerateProjectComponent,
  NetworkSelectComponent,
  NetworkControlComponent,
  NetworkResultComponent,
  // BatteryLinehartHostDirective
];
const COMPONENTS_NOROUNT = [
  NetworkSelectBatteryViewComponent,
  NetworkSelectBatteryLinechartComponent,
];

@NgModule({
  imports: [
    SharedModule,
    NetworkRoutingModule,
    ViserModule,
    G2BarModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class NetworkModule { }
