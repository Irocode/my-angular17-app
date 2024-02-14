import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ImpressumComponent } from './impressum.component';

import { SharedModule } from '../shared/shared.module';
import { LoggingService } from '../logging.service';
import * as fromImpressum from './store/impressum.reducer';
import {StoreModule} from '@ngrx/store';

@NgModule({
  declarations: [ImpressumComponent],
  imports: [
    FormsModule,
    RouterModule.forChild([{ path: '', component: ImpressumComponent }]),
    StoreModule.forFeature('impressum', fromImpressum.impressumReducer),
    SharedModule
  ],
  // providers: [LoggingService]
})
export class ImpressumModule {}
