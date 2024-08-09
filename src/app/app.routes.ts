import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddReceitasComponent } from './components/paginas/add-receitas/add-receitas.component';
import { ReceitasComponent } from './components/paginas/receitas/receitas.component';
import { ReceitaDetalhesComponent } from './components/paginas/receita-detalhes/receita-detalhes.component';

export const routes: Routes = [
    {
        path: "home",
        component: HomeComponent
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: "adicionar",
        component: AddReceitasComponent
      },
      {
        path: "receitas",
        component: ReceitasComponent
      },
      {
        path: "receitas/:id",
        component: ReceitaDetalhesComponent
      },
      {
        path: '**',
        redirectTo: '/home'
      }
];
