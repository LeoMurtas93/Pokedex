import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { Article, NewArticleDto } from '../models/articles';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient, private authService: AuthService) {}

  getArticles() : Observable<Article[]>{
    return this.http.get<Article[]>(`${environment.JSON_SERVER_BASE_URL}/article`); 
  } 

  newArticle(model: NewArticleDto): Observable<Article>{
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Bearer" + this.authService.getLoggedUser()?.accessToken
      })
    }
    return this.http.post<Article>(`${environment.JSON_SERVER_BASE_URL}/article`, model, httpOptions)
  }

  getArticleById(id: number):Observable <Article>{
    return this.http.get<Article>(`${environment.JSON_SERVER_BASE_URL}/article/${id}`);
  }

  deleteArticleById(id: number):Observable <any>{
    return this.http.delete<any>(`${environment.JSON_SERVER_BASE_URL}/article/${id}`);
  }
}
