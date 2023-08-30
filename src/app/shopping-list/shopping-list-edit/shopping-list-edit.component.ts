import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') ingredientForm: NgForm;
  ingredientSelectedSubscription: Subscription;
  editMode = false;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredientSelectedSubscription = this.shoppingListService.ingredientSelected.subscribe((index) => {
      const ingrdient = this.shoppingListService.getIngredient(index);
      this.ingredientForm.setValue({name: ingrdient.name, amount: ingrdient.amount});
      this.editMode = true;
    });
  }

  ngOnDestroy(): void {
    this.ingredientSelectedSubscription.unsubscribe();
  }

  onAddIngredient = () => {
    if (!this.ingredientForm.valid) return;
    this.shoppingListService.addIngredient(new Ingredient(this.ingredientForm.value.name, this.ingredientForm.value.amount));
  }

  onClearForm = () => {
    this.ingredientForm.reset();
    this.editMode = false;
  }
}
