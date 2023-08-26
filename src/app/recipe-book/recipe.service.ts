import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    public recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            'Burger',
            'This is simply a test',
            [
                new Ingredient('Bun', 1),
                new Ingredient('Steak', 1),
                new Ingredient('Tomato', 1),
                new Ingredient('Cheddar slice', 1)
            ]
        ),
        new Recipe(
            'Lasagna',
            'This is simply a test',
            [
                new Ingredient('Pasta', 10),
                new Ingredient('Smashed Meat', 500),
                new Ingredient('Tomato', 5),
                new Ingredient('Cheese', 4),
                new Ingredient('Carrot', 2),
            ],
            'https://www.southernliving.com/thmb/HSEUOjJVCl4kIRJRMAZ1eblQlWE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Millionaire_Spaghetti_019-34e9c04b1ae8405088f53450a048e413.jpg'
        )
    ];

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
}