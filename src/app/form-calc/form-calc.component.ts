import { Component } from '@angular/core';

@Component({
  selector: 'app-form-calc',
  templateUrl: './form-calc.component.html',
  styleUrls: ['./form-calc.component.css']
})
export class FormCalcComponent {

  lastOperation: any = '';
  currentOperation: any = '';
  firstOperation = true;

  addToDisplay(value: any) {
    if (this.firstOperation) {
      if (+value >= 0 || value === ".") {
        this.addDigit(value);
      } else {
        this.processOperation(value);
      }
    }
    else {
      this.lastOperation = "";
      this.currentOperation = "";
      this.firstOperation = true;
      if (+value >= 0 || value === ".") {
        this.addDigit(value);
      } else {
        this.processOperation(value);
      }
    }
  }

  addDigit(digit: any) {
    if (digit === "." && this.currentOperation.includes(".")) {
      return;
    }
    this.currentOperation += digit;
    this.updateDisplay(null,null,null,null)
  }

  processOperation(digit: any) {
    if (this.currentOperation === "" && digit !== "C") {
      if (this.lastOperation !== "") {
        this.changeOperation(digit);
      }
      return;
    }
    let valueOperation: any;
    let last = +this.lastOperation.split(" ")[0];
    let current = +this.currentOperation;
    switch (digit) {
      case "+":
        valueOperation = last + current;
        this.updateDisplay(valueOperation, digit, current, last);
        break;
      case "-":
        valueOperation = last - current;
        this.updateDisplay(valueOperation, digit, current, last);
        break;
      case "*":
        valueOperation = last * current;
        this.updateDisplay(valueOperation, digit, current, last);
        break;
      case "/":
        valueOperation = last / current;
        this.updateDisplay(valueOperation, digit, current, last);
        break;
      case "DEL":
        valueOperation = last / current;
        this.processingDel()
        break;
        case "CE":
        valueOperation = last / current;
        this.processingCe()
        break;
        case "C":
        valueOperation = last / current;
        this.processingC()
        break;
        case "=":
        valueOperation = last / current;
        this.processingEqual()
        break;
    }
  }

  changeOperation(operation: any) {

    const mathOperations = ["+","-","*","/"]
    if(!operation.includes(operation)) {
      return
    }
    this.lastOperation = this.lastOperation.trim().slice(0, -1) + operation;
  }

  updateDisplay(
    valueOperation: any,
    operation: any,
    current: any,
    last: any
  ) {
        console.log(valueOperation)
  if (valueOperation !== null) {
    if (valueOperation === 0) {
      valueOperation = current;
    }
    this.lastOperation = `${current} ${operation}`
    if (last > 0) {
      this.lastOperation = ` ${last} ${operation} ${current} = `
      this.currentOperation = valueOperation;
    } else {
      this.currentOperation = "";
      }
    }
  }

  processingDel() {

    this.currentOperation = this.currentOperation.slice(0, -1);
  }

  processingCe() {
    this.currentOperation = "";
  }

  processingC() {
    this.currentOperation = "";
    this.lastOperation = "";
  }

  processingEqual() {
    let operation = this.lastOperation.split(" ")[1];
    this.firstOperation = false;
    this.processOperation(operation);
  }
}
