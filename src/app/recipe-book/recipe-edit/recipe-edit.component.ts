import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit{
  editMode: boolean = false;
  recipeForm: FormGroup;
  indexRecipe: number;

  get ingredientControls() { // a getter!
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }

  constructor(private route: ActivatedRoute, private router: Router, private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.indexRecipe = params['id'];
      if (this.indexRecipe) {
        this.editMode = true;
      }
      this.initForm();
    })
  }

  onSubmit = () => {
    //const ingredients: Ingredient[] = [...this.recipeForm.get('ingredients').value].map(i => new Ingredient(i.name, i.amount));
    //const recipe = new Recipe(this.recipeForm.get('name').value, this.recipeForm.get('description').value, ingredients, this.recipeForm.get('imageUrl').value);
    if (this.editMode) {
      this.recipeService.updateRecipe(this.indexRecipe, this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onCancel = () => {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onAddIngredient = () => {
    const ingredients = this.recipeForm.get('ingredients') as FormArray;
    ingredients.push(new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
    }));
  }

  onDeleteIngredient = (index: number) => {
    const ingredients = this.recipeForm.get('ingredients') as FormArray;
    ingredients.removeAt(index);
  }

  private initForm = () => {
    let name: string = '';
    let imagePath: string = '';
    let description: string = '';
    let ingredients: FormArray = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.indexRecipe);
      name = recipe.name;
      imagePath = recipe.imagePath;
      description = recipe.description;
      if (recipe.ingredients.length > 0) {
        recipe.ingredients.forEach((ingredient: Ingredient) => {
          ingredients.push(new FormGroup({
            name: new FormControl(ingredient.name, Validators.required),
            amount: new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          }));
        });
      }
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(name, Validators.required),
      imagePath: new FormControl(imagePath),
      description: new FormControl(description, Validators.required),
      ingredients: ingredients,
    });
  }

}
