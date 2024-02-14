import { NgFor } from '@angular/common';
import { Component, computed, signal, effect } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
})
export class SignalsComponent {
  //actions: string[] = []; //Das war die alte Art, die counter zu updaten
  actions = signal<string[]>([]);

  //counter = 0; //Das war die alte Art, die counter zu updaten
  counter = signal(0);
  text = signal('Angfang');
  doubleCounter = computed(() => this.counter() * 2);


  constructor() { 
    effect(() => {
      console.log('Counter:', this.counter());
    });
  } 

  increment() {
    //this.counter++;  //Das war die alte Art, die counter zu updaten

    //this.counter.update((oldCounter) => oldCounter + 1);
    //alternative way to update the counter
    this.counter.set(this.counter() + 1);
    this.actions.update((oldActions) =>  [...oldActions, 'Mutate INCREMENT']);

    //mutate ist hier nicht vorhanden, darum update
    //this.actions.mutate((oldActions) => oldActions.push('Mutate INCREMENT'));

    this.text.set('Plus 1');
  }

  decrement() {
    //this.counter--;  //Das war die alte Art, die counter zu updaten
    //

    this.counter.update((oldCounter) => oldCounter - 1);
    this.actions.update((oldActions) => [...oldActions, 'Mutate DECREMENT']);

    this.text.set('Minus 1');
  }
}
