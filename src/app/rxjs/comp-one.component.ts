import { Component, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { BehaviorSubject, Observable, Observer, Subject, Subscription, filter, map, interval } from 'rxjs';
import { ServerService } from './server.service';
import { Ingredient } from '../shared/ingredient.model';


@Component({
  selector: 'app-comp-one',
  templateUrl: './comp-one.component.html'
 
})
export class CompOneComponent  implements OnInit{

  enteredText: string;

  constructor(private serverService: ServerService) {
  }

  ngOnInit(): void {
      
  }

  onBtnClick() {
    console.log('Button clicked' +this.enteredText);
    this.serverService.sendSubjectEmitter(this.enteredText);
  }


}

