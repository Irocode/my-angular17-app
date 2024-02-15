import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AnimationComponent } from './animation.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [AnimationComponent],
  imports: [
    FormsModule,
    RouterModule.forChild([{ path: '', component: AnimationComponent }]),
    SharedModule,   
  ],
})
export class AnimationModule { }
