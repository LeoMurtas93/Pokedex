import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { Article, NewArticleDto } from '../models/articles';
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

  newArticle(model: NewArticleDto): Observable<Article>{
    return this.http.post<Article>(`${environment.JSON_SERVER_BASE_URL}/article`, model)
  }

  getArticleById(id: number):Observable <Article>{
    return this.http.get<Article>(`${environment.JSON_SERVER_BASE_URL}/article/${id}`);
  }

  deleteArticoloById(id: number):Observable <any>{
    return this.http.delete<any>(`${environment.JSON_SERVER_BASE_URL}/article/${id}`);
  }
}
