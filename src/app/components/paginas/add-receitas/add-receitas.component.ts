import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReceitaRequest } from '../../../models/ReceitaRequest';
import { ReceitaService } from '../../../services/receita.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-receitas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-receitas.component.html',
  styleUrl: './add-receitas.component.scss'
})
export class AddReceitasComponent {
  receita: ReceitaRequest = {
    titulo: '',
    ingredientes: '',
    instrucoes: ''
  };

  

  constructor(private receitaService: ReceitaService) { }

  adicionarReceita() {
    const { titulo, ingredientes, instrucoes } = this.receita;
  
    if (titulo && ingredientes && instrucoes) {
      this.receitaService.adicionarReceita({ titulo, ingredientes, instrucoes }).subscribe(
        (response) => {
          console.log('Receita adicionada com sucesso!', response);
        },
        (error) => {
          console.error('Erro ao adicionar receita', error);
        }
      );
    } else {
      console.log('Preencha todos os campos');
    }
  }
  

}
