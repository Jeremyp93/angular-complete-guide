import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../auth/auth.guard';

import { RecipeBookResolverService } from './recipe-book-resolver.service';
import { RecipeBookComponent } from './recipe-book.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';

const routes: Routes = [
  {
    path: '', component: RecipeBookComponent, canActivate: [authGuard], children: [
      { path: '', component: RecipeStartComponent, pathMatch: 'full' },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent, resolve: [RecipeBookResolverService] },
      { path: ':id/edit', component: RecipeEditComponent, resolve: [RecipeBookResolverService] }
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeBookRoutingModule { }
