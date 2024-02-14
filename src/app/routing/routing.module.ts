import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RoutingComponent } from './routing.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [RoutingComponent],
  imports: [
    FormsModule,
    RouterModule.forChild([{ path: '', component: RoutingComponent }]),
    SharedModule
  ],
})
export class RoutingModule { }
