import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReceitaResponse } from '../../../models/ReceitaResponse';
import { ReceitaService } from '../../../services/receita.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-receitas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './receitas.component.html',
  styleUrl: './receitas.component.scss'
})
export class ReceitasComponent {
  
  receitas: ReceitaResponse[] = []; 

  constructor(private receitaService: ReceitaService, private router: Router) { }

  ngOnInit(): void {
    this.obterTodasReceitas();
  }

  obterTodasReceitas(): void {
    this.receitaService.obterTodasReceitas().subscribe(
      (data: ReceitaResponse[]) => {
        this.receitas = data;
      },
      (error) => {
        console.error('Erro ao obter receitas:', error);
      }
    );
  }

  verReceita(id: number): void {
    this.router.navigate([`/receitas/${id}`]);
  }
}
