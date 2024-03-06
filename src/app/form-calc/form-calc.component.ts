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
  difference: number = 0;
  product: number = 0;
  Quotient: number = 0;

  /*Método de soma*/
  onClickSum() {
    this.sum = this.num1 + this.num2;
  }

   /*Método de subtração*/
  onClickDifference() {
    this.sum = this.num1 - this.num2;
  }

   /*Método de multiplicação*/
  onClickProduct () {
    this.sum = this.num1 * this.num2;
  }

   /*Método de divisão*/
  onClickQuotient() {
    this.sum = this.num1 / this.num2;
  }

}
