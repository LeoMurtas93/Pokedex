import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { Article } from '../models/articles';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) {}

  getArticles() : Observable<Article[]>{
    return this.http.get<Article[]>(`${environment.JSON_SERVER_BASE_URL}/article`); 
  } 
}