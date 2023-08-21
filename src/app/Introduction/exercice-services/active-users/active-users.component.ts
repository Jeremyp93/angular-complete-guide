import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: {id: number, name: string, status: string}[];

  constructor(private usersService: UsersService) {}

  onSetToInactive(id: number) {
    this.usersService.setInactive(id);
  }
}
