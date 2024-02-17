import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-observable-new',
  templateUrl: './observable.component.html',

})
export class ObservableNewComponent implements OnDestroy {
  currentTime: string;
  private subscription: Subscription;

  constructor() {}

  startTimer() {
    // Erzeuge ein Observable, das alle Sekunde einen Wert emittiert (die aktuelle Zeit)
    const timerObservable = interval(1000);

    // Abonniere das Observable, um die emittierten Werte zu erhalten und die Anzeige zu aktualisieren
    this.subscription = timerObservable.subscribe(() => {
      this.currentTime = new Date().toLocaleTimeString();
    });
  }

  ngOnDestroy() {
    // Beende das Abonnement, um Speicherlecks zu vermeiden
    this.subscription.unsubscribe();
  }
}