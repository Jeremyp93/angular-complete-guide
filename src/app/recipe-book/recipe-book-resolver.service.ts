import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Recipe } from "./recipe.model";
import { DataStorageService } from "../shared/data-storage.service";
import { Observable } from "rxjs";
import { RecipeService } from "./recipe.service";

export const RecipeBookResolverService: ResolveFn<Recipe[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  dataStorageService: DataStorageService = inject(DataStorageService),
  recipeService: RecipeService = inject(RecipeService)
): Observable<Recipe[]> | Recipe[] => {
    const recipes = recipeService.getRecipes()
    if (recipes.length === 0)
        return dataStorageService.retrieveRecipes();
    return recipes;
}