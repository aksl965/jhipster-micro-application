import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'patient',
        loadChildren: './patient/patient.module#JhipsterMicroApplicationPatientModule'
      },
      {
        path: 'enrollment',
        loadChildren: './enrollment/enrollment.module#JhipsterMicroApplicationEnrollmentModule'
      },
      {
        path: 'claim',
        loadChildren: './claim/claim.module#JhipsterMicroApplicationClaimModule'
      },
      {
        path: 'adjudication',
        loadChildren: './adjudication/adjudication.module#JhipsterMicroApplicationAdjudicationModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterMicroApplicationEntityModule {}
