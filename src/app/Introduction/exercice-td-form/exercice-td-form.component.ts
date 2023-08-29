import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-exercice-td-form',
  templateUrl: './exercice-td-form.component.html',
  styleUrls: ['./exercice-td-form.component.css']
})
export class ExerciceTdFormComponent {
  subscription: string = 'advanced';
  result: {email: string, subscription: string, password: string};

  onSubmit = (form: NgForm): void => {
    console.log(form.value);
    this.result = {email: form.value.email, subscription: form.value.subscription, password: form.value.password}
    form.reset({subscription: this.subscription});
  }
}
