import { Component, OnDestroy } from '@angular/core';
import { SubjectDataService } from '../../subject.service';
import { Subscription } from 'rxjs';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-empfaenger-subject',
  templateUrl: './comp2.component.html'
})
export class EmpfaengerSubjectComponent implements OnDestroy {
  receivedData: string;
  private subscription: Subscription;

  constructor(private subjectDataService: SubjectDataService) {
    this.subscription = this.subjectDataService.getData().subscribe(data => {
      this.receivedData = data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}