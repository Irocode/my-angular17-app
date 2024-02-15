import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RxjsComponent } from './rxjs.component';
import { SharedModule } from '../shared/shared.module';
import { CompTwoComponent } from './comp-two.component';
import { CompOneComponent } from './comp-one.component';
import { ObservableComponent } from './observable.component';



@NgModule({
  declarations: [RxjsComponent, CompOneComponent, CompTwoComponent, ObservableComponent],
  imports: [
    FormsModule,
    RouterModule.forChild([{ path: '', component: RxjsComponent }]),
    SharedModule
  ],
})
export class RxjsModule { }
