import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { TaskComponent } from './task.component';
import { DialogComponent } from './dialog-overview-example';


@NgModule({
  declarations: [TaskComponent, DialogComponent,

  ],
  imports: [
    FormsModule,
    RouterModule.forChild([{ path: '', component: TaskComponent }]),
    SharedModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule
  ],
})
export class ModalModule { }
