import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { SharedModule } from '../shared/shared.module';
import { LoggingService } from '../logging.service';
import {StoreModule} from '@ngrx/store';
import * as fromShoppingList from './store/shopping-list.reducer';
import * as fromArticles from './store/article.reducer';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  imports: [
    FormsModule,
    RouterModule.forChild([{ path: '', component: ShoppingListComponent }]),
    StoreModule.forFeature('shoppingList', fromShoppingList.shoppingListReducer),
    StoreModule.forFeature('articles', fromArticles.articleReducer),

    SharedModule
  ],
  // providers: [LoggingService]
})
export class ShoppingListModule {}
