import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipe-book/recipe.service';
import { Recipe } from '../recipe-book/recipe.model';
import { Observable, exhaustMap, map, take, tap } from 'rxjs';
import { AuthenticationService } from '../auth/authentication.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
    private apiBaseUrl =
        'https://ng-course-recipe-book-63bf6-default-rtdb.firebaseio.com/';
    private recipesEndpoint = `${this.apiBaseUrl}recipes.json`;
    constructor(
        private httpClient: HttpClient,
        private recipeService: RecipeService,
        private authService: AuthenticationService
    ) { }

    storeRecipes = () => {
        const recipes = this.recipeService.getRecipes();
        this.httpClient.put(this.recipesEndpoint, recipes).subscribe((response) => {
            console.log(response);
        });
    };

    retrieveRecipes = (): Observable<Recipe[]> => {
        return this.httpClient.get<Recipe[]>(this.recipesEndpoint).pipe(
            map((recipes) => {
                return recipes.map((r) => {
                    return { ...r, ingredients: r.ingredients ? r.ingredients : [] };
                });
            }),
            tap((r) => {
                this.recipeService.setRecipes(r);
            })
        );
    };
}
