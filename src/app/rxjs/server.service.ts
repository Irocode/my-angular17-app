import { Component, EventEmitter, Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
    providedIn: 'root'
})

export class ServerService {
    dataEmitter = new Subject<string>();
    //dataEmitter = new EventEmitter<string>(); // This is the old way of doing it

    sendSubjectEmitter(data:string) {     
        //this.dataEmitter.emit(data); // This is the old way of doing it
        this.dataEmitter.next(data);
    }


    public count = 0;
 
    getServerSend() {   /*
        this.count = 0;
        setInterval(() => {
             console.log('count from Server', this.count);
            return this.count++;
        }, 300);
        */
    }

    getData() {
       // return this.count;
    }

    stoppServerSend() {
        this.count = 0;
        if (this.count === 0) {
            console.log('Server stopped');
            return this.count =10000;
        }
       

    }

}