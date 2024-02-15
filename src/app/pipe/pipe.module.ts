import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PipeComponent } from './pipe.component';
import { SharedModule } from '../shared/shared.module';
import { ShortenPipe } from './shorten.pipe';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [PipeComponent, ShortenPipe, FilterPipe],
  imports: [
    FormsModule,
    RouterModule.forChild([{ path: '', component: PipeComponent }]),
    SharedModule
  ],
})
export class PipeModule { }
