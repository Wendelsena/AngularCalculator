import { Component } from '@angular/core';

@Component({
  selector: 'app-form-calc',
  templateUrl: './form-calc.component.html',
  styleUrls: ['./form-calc.component.css']
})
export class FormCalcComponent {
  num1: number = 0;
  num2: number = 0;
  equal: any;
  selectedOperator: any;

  onClickEqual(): void {
    // Verifica se os números foram fornecidos antes de calcular o resultado
    if (this.num1 !== null && this.num2 !== null) {
      // Realiza a operação matemática
      switch (this.selectedOperator) {
        case '+':
          this.equal = this.num1 + this.num2;
          break;
        case '-':
          this.equal = this.num1 - this.num2;
          break;
        case 'x':
          this.equal = this.num1 * this.num2;
          break;
        case '/':
          if (this.num2 !== 0) {
            this.equal = this.num1 / this.num2;
          } else {
            // Se o denominador for zero, exibe uma mensagem de erro
            this.equal = 'Erro: Divisão por zero';
          }
          break;
        default:
          this.equal = 'Operador inválido';
      }
    } else {
      // Se um dos números não for fornecido, exibe uma mensagem de erro
      this.equal = 'Por favor, forneça ambos os números';
    }
  }

}
