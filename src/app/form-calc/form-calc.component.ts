import { Component } from '@angular/core';

@Component({
  selector: 'app-form-calc',
  templateUrl: './form-calc.component.html',
  styleUrl: './form-calc.component.css'
})
/*está classe executa as ações e guarda os objetos*/
export class FormCalcComponent {
  num1: number = 0;
  num2: number = 0;
  sum: number = 0;

}
