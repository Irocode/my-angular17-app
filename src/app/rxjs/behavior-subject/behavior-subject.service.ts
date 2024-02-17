import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviorDataService {
  private dataSubject = new BehaviorSubject<string>('Initialwert');

  getData() {
    return this.dataSubject.asObservable();
  }

  updateData(newValue: string) {
    this.dataSubject.next(newValue);
  }
}