import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImpressumComponent } from './impressum.component';
import { AuthGuard } from '../auth/auth.guard';

import { ImpressumsResolverService } from './impressums-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: ImpressumComponent,
    canActivate: [AuthGuard],
    resolve: [ImpressumsResolverService]
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImpressumsRoutingModule {}
