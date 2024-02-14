import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ImpressumComponent } from './impressum.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ImpressumComponent],
  imports: [
    FormsModule,
    RouterModule.forChild([{ path: '', component: ImpressumComponent }]),
    SharedModule
  ],
})
export class ImpressumModule { }
