import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { RecipeBookComponent } from "./recipe-book/recipe-book.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeDetailComponent } from "./recipe-book/recipe-detail/recipe-detail.component";
import { RecipeStartComponent } from "./recipe-book/recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipe-book/recipe-edit/recipe-edit.component";
import { RecipeBookResolverService } from "./recipe-book/recipe-book-resolver.service";
import { AuthComponent } from "./auth/auth.component";

const routes: Routes = [
    {path: '', redirectTo: 'recipe-book', pathMatch: 'full'},
    {path: 'recipe-book', component: RecipeBookComponent, children: [
        {path: '', component: RecipeStartComponent, pathMatch: 'full'},
        {path: 'new', component: RecipeEditComponent},
        {path: ':id', component: RecipeDetailComponent, resolve: [RecipeBookResolverService]},
        {path: ':id/edit', component: RecipeEditComponent, resolve: [RecipeBookResolverService]}
    ]},
    {path: 'shopping-list', component: ShoppingListComponent},
    {path: 'auth', component: AuthComponent},
    {path: '**', redirectTo: 'recipe-book'}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}