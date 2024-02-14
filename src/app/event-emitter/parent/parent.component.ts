import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  @Input() public parentData!: string;
  @Output() private eventSource = new EventEmitter<string>(true);


  public eventFiredFromParent() {
    const random = Math.floor((Math.random() * 60) + 1);
    this.eventSource.emit('Fired from Parent ' + random);
  }

}
