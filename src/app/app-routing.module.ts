import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule),
  },
  {
    path: 'shopping-list',
    loadChildren: () => import('./shopping-list/shopping-list.module').then(m => m.ShoppingListModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'impressum',
    loadChildren: () => import('./impressum/impressum.module').then(m => m.ImpressumModule),
  },
  {
    path: 'eventemitter',
    loadChildren: () => import('./event-emitter/family.module').then(m => m.FamilyModule),
  },
  {
    path: 'unittest',
    loadChildren: () => import('./unit-test/unit-test.module').then(m => m.UnitTestModule),
  },
  {
    path: 'signals',
    loadChildren: () => import('./signals/signals.module').then(m => m.SignalsModule),
  },
  {
    path: 'routing/users',
    loadChildren: () => import('./routing/routing.module').then(m => m.RoutingModule),
  },
  {
    path: 'pipes',
    loadChildren: () => import('./pipe/pipe.module').then(m => m.PipeModule),
  }, {
    path: 'rxjs',
    loadChildren: () => import('./rxjs/rxjs.module').then(m => m.RxjsModule),
  }
  , {
    path: 'animation',
    loadChildren: () => import('./animation/animation.module').then(m => m.AnimationModule),
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
