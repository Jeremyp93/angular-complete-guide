import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice-directives',
  templateUrl: './exercice-directives.component.html',
  styleUrls: ['./exercice-directives.component.css']
})
export class ExerciceDirectivesComponent {
  temperature: number;
  flagDetails: boolean = false;
  logs: string[] = [];

  constructor() {
  }

  onShowDetails = () => {
    this.logs.push(new Date().toLocaleString('fr-BE'));
    this.flagDetails = !this.flagDetails;
    if (this.flagDetails) {
      this.temperature = Math.random() * 20;
    }
  }

  getBackgroundColor = (index: number) => {
    return index >= 4 ? 'blue' : 'transparent';
  }

  getColorClass = (index: number) => {
    return index >= 4 ? true : false;
  }
}
