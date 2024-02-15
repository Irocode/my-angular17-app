import { Component, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { BehaviorSubject, Observable, Observer, Subject, Subscription, filter, map, interval } from 'rxjs';
import { ServerService } from './server.service';
import { Ingredient } from '../shared/ingredient.model';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent {

  constructor(private serverService: ServerService) {
  }




  

}











