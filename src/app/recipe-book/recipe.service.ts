import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class RecipeService {
    recipesUpdated = new Subject<Recipe[]>();
    private recipes: Recipe[] = [];

    constructor(private shoppingListService: ShoppingListService) {}

    public getRecipes = (): Recipe[] => {
        return [...this.recipes];
    }

    public getRecipe = (index: number): Recipe => {
        return this.recipes[index];
    }

    public addIngredientsToShoppingList = (ingredients: Ingredient[]): void => {
        this.shoppingListService.addIngredients(ingredients);
    }

    public addRecipe = (recipe: Recipe) => {
        this.recipes.push(recipe);
        this.recipesUpdated.next([...this.recipes]);
    }

    public updateRecipe = (index:number, recipe: Recipe) => {
        this.recipes[index] = recipe;
        this.recipesUpdated.next([...this.recipes]);
    }

    public deleteRecipe = (index: number) => {
        this.recipes.splice(index, 1);
        this.recipesUpdated.next([...this.recipes]);
    }

    public setRecipes = (recipes: Recipe[]) => {
        this.recipes = recipes;
        this.recipesUpdated.next([...this.recipes]);
    }
}