import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { DeviceRoutingModule } from './device-routing.module';
import { DeviceBatteryDetailComponent } from './battery-detail/battery-detail.component';
import { DeviceWindGeneratorDetailComponent } from './wind-generator-detail/wind-generator-detail.component';
import { DeviceBatteryDetailViewComponent } from './battery-detail/view/view.component';
import { DeviceBatteryDetailEditComponent } from './battery-detail/edit/edit.component';

const COMPONENTS = [
  DeviceBatteryDetailComponent,
  DeviceWindGeneratorDetailComponent
];
const COMPONENTS_NOROUNT = [
  DeviceBatteryDetailViewComponent,
  DeviceBatteryDetailEditComponent];

@NgModule({
  imports: [
    SharedModule,
    DeviceRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class DeviceModule { }
