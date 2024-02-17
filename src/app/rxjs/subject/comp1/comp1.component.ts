import { Component } from '@angular/core';
import { SubjectDataService } from '../subject.service';

@Component({
  selector: 'app-sender-subject',
  templateUrl: './comp1.component.html'
})
export class SenderSubjectComponent {
  constructor(private subjectDataService: SubjectDataService) {}

  sendData() {
    this.subjectDataService.sendData('Hello from SenderComponent!');
  }
}
