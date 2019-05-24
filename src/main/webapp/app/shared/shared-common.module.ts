import { NgModule } from '@angular/core';

import { JhipsterMicroApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [JhipsterMicroApplicationSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [JhipsterMicroApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipsterMicroApplicationSharedCommonModule {}
