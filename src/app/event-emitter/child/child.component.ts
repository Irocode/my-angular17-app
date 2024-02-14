import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ChildComponent {

  @Input() public childData!: string;
  @Output() private eventSource = new EventEmitter<string>(true);


  public eventFiredFromChild() {
    const random = Math.floor((Math.random() * 60) + 1);
    this.eventSource.emit('Fired from Child ' + random);
  }

}
