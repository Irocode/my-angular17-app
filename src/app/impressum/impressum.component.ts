import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Impressum } from '../shared/impressum.model';
import * as ImpressumActions from './store/impressum.actions';
import * as fromApp from '../store/app.reducer';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.css']
})
export class ImpressumComponent implements OnInit {
  //impressums: Observable<{ impressums: Impressum[] }>;
  impressums: any;
  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
   this.impressums = this.store.select('impressum');
  // this.impressums = this.store.dispatch(ImpressumActions.fetchImpressums());

   console.log(this.impressums);
 
  }

  onEditItem(index: number) {
    this.store.dispatch(ImpressumActions.startEdit({index}));
  }

}
