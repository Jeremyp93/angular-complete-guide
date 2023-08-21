import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[]

    constructor (name: string, description: string, ingredients: Ingredient[], imagePath?: string) {
        this.name = name;
        this.description = description;
        this.ingredients = ingredients;
        if (imagePath) this.imagePath = imagePath;
    }
}