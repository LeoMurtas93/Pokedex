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

  articoloFinto: Article ={ id: 1, published: true, title: "", text: "", userId: 1 };
  articoli: Article[] = [];


  constructor(private blogService: BlogService){}


  ngOnInit(): void {
    this.blogService.getArticles().subscribe(dati => this.articoli = dati);
  }

  elimina(id: number){
    this.blogService.deleteArticoloById(id).subscribe(dati => {
      this.blogService.getArticles().subscribe(dati => this.articoli = dati);
    })
  }
}
