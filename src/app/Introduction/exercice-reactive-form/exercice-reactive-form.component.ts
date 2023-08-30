import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-exercice-reactive-form',
  templateUrl: './exercice-reactive-form.component.html',
  styleUrls: ['./exercice-reactive-form.component.css']
})
export class ExerciceReactiveFormComponent implements OnInit {
  projectForm: FormGroup;

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, Validators.required, this.validateNotTestNameAsync),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl()
    })
  }

  onSubmit = () => {
    console.log(this.projectForm);
  }

  validateNotTestName = (control: FormControl): {[s: string]: boolean} => {
    if (control.value === 'Test') {
      return { 'noTestName': true };
    }
    return null;
  }

  validateNotTestNameAsync = (control: FormControl): Promise<any> | Observable<any> => {
    return new Promise<any>((resolve) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({ 'noTestName': true });
        }
        resolve(null);
      }, 1500)
    });
  }
}
