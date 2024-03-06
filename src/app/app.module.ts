import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormCalcComponent } from './form-calc/form-calc.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormCalcComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, /*Módulo para conectar o formulário ao código do seu app (controla a entrada de dados)*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
