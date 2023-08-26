import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { WarningAlertComponent } from './Introduction/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './Introduction/success-alert/success-alert.component';
import { Exercice2Component } from './Introduction/exercice2/exercice2.component';
import { ExerciceDirectivesComponent } from './Introduction/exercice-directives/exercice-directives.component';
import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-book/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { HeaderComponent } from './header/header.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { GameControlComponent } from './Introduction/exercice-data-binding/game-control/game-control.component';
import { OddComponent } from './Introduction/exercice-data-binding/odd/odd.component';
import { EvenComponent } from './Introduction/exercice-data-binding/even/even.component';
import { GameComponent } from './Introduction/exercice-data-binding/game/game.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ActiveUsersComponent } from './Introduction/exercice-services/active-users/active-users.component';
import { InactiveUsersComponent } from './Introduction/exercice-services/inactive-users/inactive-users.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './recipe-book/recipe-start/recipe-start.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    Exercice2Component,
    ExerciceDirectivesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    HeaderComponent,
    RecipeBookComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    GameComponent,
    DropdownDirective,
    ActiveUsersComponent,
    InactiveUsersComponent,
    RecipeStartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
