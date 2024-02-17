import { Component } from '@angular/core';
import { SubjectDataService } from './subject.service';

@Component({
  selector: 'app-sender',
  template: `
    <button (click)="sendData()">Send Data</button>
  `
})
export class SenderComponent {
  constructor(private subjectDataService: SubjectDataService) {}

  sendData() {
    this.subjectDataService.sendData('Hello from SenderComponent!');
  }
}
