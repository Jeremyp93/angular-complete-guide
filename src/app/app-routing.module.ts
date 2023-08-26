import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { RecipeBookComponent } from "./recipe-book/recipe-book.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeDetailComponent } from "./recipe-book/recipe-detail/recipe-detail.component";
import { RecipeStartComponent } from "./recipe-book/recipe-start/recipe-start.component";

const routes: Routes = [
    {path: '', redirectTo: 'recipe-book', pathMatch: 'full'},
    {path: 'recipe-book', component: RecipeBookComponent, children: [
        {path: '', component: RecipeStartComponent, pathMatch: 'full'},
        {path: ':id', component: RecipeDetailComponent}
    ]},
    {path: 'shopping-list', component: ShoppingListComponent},
    {path: '**', redirectTo: 'recipe-book'}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}