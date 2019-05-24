import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  JhipsterMicroApplicationSharedLibsModule,
  JhipsterMicroApplicationSharedCommonModule,
  JhiLoginModalComponent,
  HasAnyAuthorityDirective
} from './';

@NgModule({
  imports: [JhipsterMicroApplicationSharedLibsModule, JhipsterMicroApplicationSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [JhipsterMicroApplicationSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterMicroApplicationSharedModule {
  static forRoot() {
    return {
      ngModule: JhipsterMicroApplicationSharedModule
    };
  }
}
