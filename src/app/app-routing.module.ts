import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    { path: '', redirectTo: 'recipe-book', pathMatch: 'full' },
    { path: 'recipe-book', loadChildren: () => import('./recipe-book/recipe-book.module').then(m => m.RecipeBookModule) },
    { path: 'shopping-list', loadChildren: () => import('./shopping-list/shopping-list.module').then(m => m.ShoppingListModule) },
    { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule { }