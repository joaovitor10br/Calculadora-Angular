import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

  visor: string = '';

  // Adiciona caracteres no visor
  adicionar(valor: string) {
    this.visor += valor;
  }

  // Limpa o visor
  limpar() {
    this.visor = '';
  }

  // Faz o cálculo
  calcular() {
    try {
      // eval() avalia a expressão matemática digitada no visor
      this.visor = eval(this.visor);
    } catch (e) {
      this.visor = 'Erro';
    }
  }
}
