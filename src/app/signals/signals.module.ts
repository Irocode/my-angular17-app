import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SignalsComponent } from './signals.component';
import { SharedModule } from '../shared/shared.module';
import { NgFor } from '@angular/common';



@NgModule({
  declarations: [SignalsComponent],
  imports: [
    FormsModule,
    RouterModule.forChild([{ path: '', component: SignalsComponent }]),
    SharedModule,
    NgFor
  ],
})
export class SignalsModule { }
