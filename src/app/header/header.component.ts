import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthenticationService } from '../auth/authentication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSub: Subscription;
  isLoggedIn = false;

  constructor(private dataStorageService: DataStorageService, private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isLoggedIn = !!user;
      console.log(this.isLoggedIn);
    })
  }

  storeRecipes = () => {
    this.dataStorageService.storeRecipes();
  }

  retrieveRecipes = () => {
    this.dataStorageService.retrieveRecipes().subscribe();
  }

  onLogout = () => {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
