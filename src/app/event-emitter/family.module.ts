import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FamilyComponent } from './family.component';
import { SharedModule } from '../shared/shared.module';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [FamilyComponent, ParentComponent, ChildComponent],
  imports: [
    FormsModule,
    RouterModule.forChild([{ path: '', component: FamilyComponent }]),
    SharedModule
  ],
})
export class FamilyModule { }
