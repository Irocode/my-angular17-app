import { Component, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { BehaviorSubject, Observable, Observer, Subject, Subscription, filter, map, interval } from 'rxjs';
import { ServerService } from './server.service';
import { Ingredient } from '../shared/ingredient.model';


@Component({
    selector: 'app-observable',
    templateUrl: './observable.component.html'

})
export class ObservableComponent implements OnInit, OnDestroy {

    mySubscription: Subscription;

    myObservable = new Observable<number>((observer) => {
        observer.next(0);
        const radomNumber: any = this.serverService.getData();
        observer.next(radomNumber);
    });

    constructor(private serverService: ServerService) {
    }

    ngOnInit(): void {
        console.clear();
        this.serverService.getServerSend();
    }

    observeNotification() {
       this.mySubscription = this.myObservable.subscribe((val: number) => {
            if (val > 0) {
                console.log('Observable from Server', val);
            }
            if (val > 10) {
                console.log('Hallo das ist über 10', val);
                
            }
            if (val > 11) {
                alert('Hallo das ist über 11');
                this.serverService.stoppServerSend();
                
            }

            if (val === 10000) {
                console.log('Server stopped');
                this.mySubscription.unsubscribe();
            }
        }, (error) => {
            console.log('Error', error);
        }
        );
    }


    ngOnDestroy(): void {
        this.mySubscription.unsubscribe();
    }


}

