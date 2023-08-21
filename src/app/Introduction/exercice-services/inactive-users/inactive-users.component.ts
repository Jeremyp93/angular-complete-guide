import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: {id: number, name: string, status: string}[];

  constructor(private usersService: UsersService) {}

  onSetToActive(id: number) {
    this.usersService.setActive(id);
  }
}
