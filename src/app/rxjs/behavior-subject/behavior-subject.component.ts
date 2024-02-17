import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorDataService } from './behavior-subject.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',

})
export class BehaviorComponent implements OnInit, OnDestroy {
  currentValue: string;
  private subscription: Subscription;

  constructor(private behaviorDataService: BehaviorDataService) {}

  ngOnInit() {
    // Abonniere das BehaviorSubject, um den aktuellen Wert zu erhalten
    this.subscription = this.behaviorDataService.getData().subscribe(value => {
      this.currentValue = value;
    });
  }

  ngOnDestroy() {
    // Beende das Abonnement, um Speicherlecks zu vermeiden
    this.subscription.unsubscribe();
  }

  // Methode zum Aktualisieren des Werts im DataService
  updateValue() {
    const newValue = 'Neuer Wert: ' + new Date().toLocaleTimeString();
    this.behaviorDataService.updateData(newValue);
  }
}