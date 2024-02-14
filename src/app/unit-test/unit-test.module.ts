import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NewComponent } from './new/new.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [NewComponent],
  imports: [
    FormsModule,
    RouterModule.forChild([{ path: '', component: NewComponent }]),
    SharedModule
  ],
})
export class UnitTestModule { }
