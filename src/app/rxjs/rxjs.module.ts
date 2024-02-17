import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RxjsComponent } from './rxjs.component';
import { SharedModule } from '../shared/shared.module';
import { ObservableComponent } from './observable.component';
import { BehaviorSubject } from 'rxjs';
import { BehaviorComponent } from './behavior-subject/behavior-subject.component';
import { ObservableNewComponent } from './observable/behavior-subject/observable.component';
import { SenderSubjectComponent } from './subject/comp1/comp1.component';
import { EmpfaengerSubjectComponent } from './subject/com2-main/comp2/comp2.component';
import { SubjectDataService } from './subject/subject.service';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [RxjsComponent,
    ObservableComponent,
    BehaviorComponent,
    ObservableComponent,
    ObservableNewComponent,
    SenderSubjectComponent,
    EmpfaengerSubjectComponent
  ],
  imports: [
    FormsModule,
    RouterModule.forChild([{ path: '', component: RxjsComponent }]),
    SharedModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [SubjectDataService]
})
export class RxjsModule { }
