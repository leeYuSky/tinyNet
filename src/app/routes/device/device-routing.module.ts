import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeviceBatteryDetailComponent } from './battery-detail/battery-detail.component';
import { DeviceWindGeneratorDetailComponent } from './wind-generator-detail/wind-generator-detail.component';

const routes: Routes = [
  { path: 'batteryDetail', component: DeviceBatteryDetailComponent },
  { path: 'windGeneratorDetail', component: DeviceWindGeneratorDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeviceRoutingModule { }
