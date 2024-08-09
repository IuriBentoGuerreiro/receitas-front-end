import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReceitaResponse } from '../models/ReceitaResponse';
import { ReceitaRequest } from '../models/ReceitaRequest';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

  private apiUrl = 'http://localhost:8075/receita'

  constructor(private http: HttpClient) { }

  obterTodasReceitas(): Observable<ReceitaResponse[]>{
    return this.http.get<ReceitaResponse[]>(this.apiUrl);
  }

  obterReceitaPorId(id: number): Observable<ReceitaResponse>{
    return this.http.get<ReceitaResponse>(`${this.apiUrl}/${id}`);
  }

  adicionarReceita(receita: ReceitaRequest): Observable<any> {
    return this.http.post(this.apiUrl, receita);
  }

  excluirReceita(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }
}
