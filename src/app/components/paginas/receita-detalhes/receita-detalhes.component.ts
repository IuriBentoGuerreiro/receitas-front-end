import { Component } from '@angular/core';
import { ReceitaResponse } from '../../../models/ReceitaResponse';
import { ActivatedRoute } from '@angular/router';
import { ReceitaService } from '../../../services/receita.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-receita-detalhes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './receita-detalhes.component.html',
  styleUrl: './receita-detalhes.component.scss'
})
export class ReceitaDetalhesComponent {
  receita: ReceitaResponse | undefined;

  constructor(
    private route: ActivatedRoute,
    private receitaService: ReceitaService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.receitaService.obterReceitaPorId(id).subscribe(
      (data) => {
        this.receita = data;
      },
      (error) => {
        console.error('Erro ao carregar receita:', error);
      }
    );
  }

}
