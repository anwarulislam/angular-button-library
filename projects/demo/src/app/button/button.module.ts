import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MedatusButtonModule } from 'projects/medatus-button/src/public-api';
import { SharedModule } from '../shared/shared.module';
import { ButtonComponent } from './button.component';

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    SharedModule,
    MedatusButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ButtonComponent
      }
    ])
  ]
})
export class ButtonModule { }
