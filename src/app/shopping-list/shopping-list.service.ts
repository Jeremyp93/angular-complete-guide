import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Ingredient } from "../shared/ingredient.model";

@Injectable({providedIn: 'root'})
export class ShoppingListService {
    public ingredientsChanged: Subject<Ingredient[]> = new Subject<Ingredient[]>();
    public ingredientSelected: Subject<number> = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('apples', 5),
        new Ingredient('tomatoes', 10)
    ];

    public getIngredients = (): Ingredient[] => {
        return [...this.ingredients];
    }

    public getIngredient = (index: number): Ingredient => {
        return this.ingredients[index];
    }

    public addIngredient= (ingredient: Ingredient): void => {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next([...this.ingredients]);
    }

    public addIngredients = (ingredients: Ingredient[]): void => {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next([...this.ingredients]);
    }

    public updateIngredient = (index: number, ingredient: Ingredient) => {
        this.ingredients[index] = ingredient;
        this.ingredientsChanged.next([...this.ingredients]);
    }

    public deleteIngredient = (index: number) => {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next([...this.ingredients]);
    }
}