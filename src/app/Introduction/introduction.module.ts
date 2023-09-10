import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../header/header.component';
import { EvenComponent } from './exercice-data-binding/even/even.component';
import { GameControlComponent } from './exercice-data-binding/game-control/game-control.component';
import { GameComponent } from './exercice-data-binding/game/game.component';
import { OddComponent } from './exercice-data-binding/odd/odd.component';
import { ExerciceDirectivesComponent } from './exercice-directives/exercice-directives.component';
import { ExercicePipesComponent } from './exercice-pipes/exercice-pipes.component';
import { ReversePipe } from './exercice-pipes/reverse.pipe';
import { SortPipe } from './exercice-pipes/sort.pipe';
import { ExerciceReactiveFormComponent } from './exercice-reactive-form/exercice-reactive-form.component';
import { ActiveUsersComponent } from './exercice-services/active-users/active-users.component';
import { InactiveUsersComponent } from './exercice-services/inactive-users/inactive-users.component';
import { ExerciceTdFormComponent } from './exercice-td-form/exercice-td-form.component';
import { Exercice2Component } from './exercice2/exercice2.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    WarningAlertComponent,
    SuccessAlertComponent,
    Exercice2Component,
    ExerciceDirectivesComponent,
    HeaderComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    GameComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    ExerciceTdFormComponent,
    ExerciceReactiveFormComponent,
    ExercicePipesComponent,
    ReversePipe,
    SortPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class IntroductionModule { }
