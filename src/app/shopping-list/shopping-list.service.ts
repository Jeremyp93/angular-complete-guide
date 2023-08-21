import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable({providedIn: 'root'})
export class ShoppingListService {
    public ingredientsChanged: EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('apples', 5),
        new Ingredient('tomatoes', 10)
    ];

    public getIngredients = (): Ingredient[] => {
        return [...this.ingredients];
    }

    public addIngredient= (ingredient: Ingredient): void => {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit([...this.ingredients]);
    }

    public addIngredients = (ingredients: Ingredient[]): void => {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit([...this.ingredients]);
    }
}