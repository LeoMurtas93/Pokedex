import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/articles';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {
  // se abbiamo errori facciamo ctrl + punto e indovina la soluzione


  articoli: Article[] = [];


  constructor(private blogService: BlogService){}


  ngOnInit(): void {
    this.blogService.getArticles().subscribe(dati => this.articoli = dati);
  }
}
