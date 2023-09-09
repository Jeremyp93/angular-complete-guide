import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'

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
import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component';
import { ExerciceTdFormComponent } from './Introduction/exercice-td-form/exercice-td-form.component';
import { ExerciceReactiveFormComponent } from './Introduction/exercice-reactive-form/exercice-reactive-form.component';
import { ExercicePipesComponent } from './Introduction/exercice-pipes/exercice-pipes.component';
import { ReversePipe } from './Introduction/exercice-pipes/reverse.pipe';
import { SortPipe } from './Introduction/exercice-pipes/sort.pipe';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { DataStorageInterceptorService } from './shared/data-storage-interceptor.service';
import { AlertComponent } from './shared/alert/alert.component';
import { PlaceholderDirective } from './shared/placeholder.directive';

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
    RecipeStartComponent,
    RecipeEditComponent,
    ExerciceTdFormComponent,
    ExerciceReactiveFormComponent,
    ExercicePipesComponent,
    ReversePipe,
    SortPipe,
    AuthComponent,
    LoadingSpinnerComponent,
    AlertComponent,
    PlaceholderDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: DataStorageInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
