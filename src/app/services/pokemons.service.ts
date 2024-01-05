import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CardResponse, SearchResponse } from '../models/pokemons';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders ({
      "X-Api-Key": environment.POKEMON_API_KEY
    })
  }

  search(pageSize: number = 10, page: number = 1): Observable<SearchResponse>{
    return this.http.get<SearchResponse>(`${environment.POKEMON_API_BASE_URL}/cards?pageSize=${pageSize}&page=${page}`, this.httpOptions)
  }

  getById(codice:string): Observable<CardResponse>{
    return this.http.get<CardResponse>(`${environment.POKEMON_API_BASE_URL}/cards/${codice}`, this.httpOptions)
  }
}
