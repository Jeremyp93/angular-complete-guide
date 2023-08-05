import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  @Output() intervalEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output() intervalStopped = new EventEmitter();
  interval: any;
  i: number = 0;
  startDisabled: boolean = false;
  pauseDisabled: boolean = true;

  onStartGame = () => {
    this.interval = setInterval(() => {
      this.intervalEvent.emit(this.i++);
    }, 1000);
    this.startDisabled = true;
    this.pauseDisabled = false;
  }

  onStopGame = () => {
    clearInterval(this.interval);
    this.i = 0;
    this.intervalStopped.emit();
    this.startDisabled = false;
    this.pauseDisabled = true;
  }

  onPauseGame = () => {
    clearInterval(this.interval);
    this.startDisabled = false;
    this.pauseDisabled = true;
  }
}
