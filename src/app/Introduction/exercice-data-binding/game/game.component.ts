import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  numbers: number[] = [];

  intervalSet = (number: number) => {
    this.numbers.push(number);
  }

  clearArray = () => {
    this.numbers = [];
  }
}
