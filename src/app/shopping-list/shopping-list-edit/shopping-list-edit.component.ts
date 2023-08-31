import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', {static: false}) ingredientForm: NgForm;
  indexIngredient: number;
  ingredientSelectedSubscription: Subscription;
  editMode = false;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredientSelectedSubscription = this.shoppingListService.ingredientSelected.subscribe((index: number) => {
      this.indexIngredient = index;
      const ingrdient = this.shoppingListService.getIngredient(index);
      this.ingredientForm.setValue({name: ingrdient.name, amount: ingrdient.amount});
      this.editMode = true;
    });
  }

  ngOnDestroy(): void {
    this.ingredientSelectedSubscription.unsubscribe();
  }

  onSubmit = () => {
    if (!this.ingredientForm.valid) return;
    const ingredient: Ingredient =  new Ingredient(this.ingredientForm.value.name, this.ingredientForm.value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.indexIngredient, ingredient);
    } else {
      this.shoppingListService.addIngredient(ingredient);
    }
    this.resetForm();
  }

  onClearForm = () => {
    this.resetForm();
  }

  onDeleteIngredient = () => {
    this.shoppingListService.deleteIngredient(this.indexIngredient);
    this.resetForm();
  }

  private resetForm = () => {
    this.ingredientForm.reset();
    this.editMode = false;
  }
}
