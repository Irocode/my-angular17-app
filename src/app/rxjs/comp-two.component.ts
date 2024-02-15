import { Component, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { BehaviorSubject, Observable, Observer, Subject, Subscription, filter, map, interval } from 'rxjs';
import { ServerService } from './server.service';
import { Ingredient } from '../shared/ingredient.model';


@Component({
  selector: 'app-comp-two',
  templateUrl: './comp-two.component.html'
 
})
export class CompTwoComponent  implements OnInit{

  inputText: string;

  constructor(private serverService: ServerService) {    
  }


  ngOnInit(): void {
    this.serverService.dataEmitter.subscribe( (data: string) => {
      this.inputText = data;
    });
      
  }



}

