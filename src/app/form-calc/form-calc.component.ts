import { Component } from '@angular/core';

@Component({
  selector: 'app-form-calc',
  templateUrl: './form-calc.component.html',
  styleUrls: ['./form-calc.component.css']
})
export class FormCalcComponent {
  num1: number = 0;
  num2: number = 0;
  equal: number = 0;

  onClickSum(): void {
    this.equal = this.num1 + this.num2;
  }

  onClickDifference(): void {
    this.equal = this.num1 - this.num2;
  }

  onClickProduct(): void {
    this.equal = this.num1 * this.num2;
  }

  onClickQuotient(): void {
    if (this.num2 !== 0) {
      this.equal = this.num1 / this.num2;
    } else {
      this.equal = NaN; // Tratamento de divisão por zero
    }
  }

  onClickEqual(): void {
    // Exibir uma mensagem quando o botão de igual é clicado
    alert("Botão de igual foi clicado!");
  }
}
