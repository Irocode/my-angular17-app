import { Component, ContentChild, ElementRef, EventEmitter, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrl: './family.component.css'
})
export class FamilyComponent {
  @Input() textFromParent!: string;
  public parentData: string = 'Old Family Parent';
  public childData: string = 'Old Family Child';


  onFiredtoParent(event: string) {
    this.parentData = event;
  }

  onFiredtoChild(event: string) {
    this.childData = event;
  }

}
