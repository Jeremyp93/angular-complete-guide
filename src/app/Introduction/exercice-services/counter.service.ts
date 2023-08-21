import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class CounterService {
    public counter = 0;

    public addCount() {
        this.counter++;
        console.log(`Counter is: ${this.counter}`);
    }
}