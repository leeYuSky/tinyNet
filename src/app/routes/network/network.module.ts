import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { NetworkRoutingModule } from './network-routing.module';
import { NetworkDesignComponent } from './design/design.component';
import { NetworkGenerateProjectComponent } from './generate-project/generate-project.component';
import { NetworkSelectComponent } from './select/select.component';
import { NetworkSelectViewComponent } from './select/view/view.component';
import { NetworkControlComponent } from './control/control.component';
import { NetworkResultComponent } from './result/result.component';

const COMPONENTS = [
  NetworkDesignComponent,
  NetworkGenerateProjectComponent,
  NetworkSelectComponent,
  NetworkControlComponent,
  NetworkResultComponent];
const COMPONENTS_NOROUNT = [
  NetworkSelectViewComponent];

@NgModule({
  imports: [
    SharedModule,
    NetworkRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class NetworkModule { }
