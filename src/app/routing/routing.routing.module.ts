import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingComponent } from '../routing/routing.component';
import { AuthGuard } from '../auth/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'routing', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent },
    ]
  },
  {
    path: 'servers', component: ServersComponent, children: [
      { path: ':id', component: ServersComponent },
      { path: ':id/:edit', component: EditServerComponent }
    ]
  }
];

@NgModule({
  declarations: [

    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [ServersService],
  bootstrap: [RoutingComponent]
})
export class RoutingRoutingModule { }
