import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-exercice-td-form',
  templateUrl: './exercice-td-form.component.html',
  styleUrls: ['./exercice-td-form.component.css']
})
export class ExerciceTdFormComponent {
  subscription: string = 'advanced';

  onSubmit = (form: NgForm): void => {
    console.log(form);
  }
}
