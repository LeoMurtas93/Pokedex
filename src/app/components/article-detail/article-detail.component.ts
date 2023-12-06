import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/articles';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent {
  article?: Article;

  constructor (private blogService: BlogService, private route: ActivatedRoute){

  }

  ngOnInit(): void{
    const id = this.route.snapshot.paramMap.get("id");

    const idNumber = Number(id!);

    this.blogService.getArticleById(idNumber).subscribe(dati => this.article = dati);
  }
}
