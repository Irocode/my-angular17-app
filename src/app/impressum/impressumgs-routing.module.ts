import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImpressumComponent } from './impressum.component';
import { AuthGuard } from '../auth/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: ImpressumComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImpressumsRoutingModule { }
