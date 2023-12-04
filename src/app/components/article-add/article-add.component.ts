import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewArticleDto } from 'src/app/models/articles';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.css']
})
export class ArticleAddComponent {
  model: NewArticleDto = new NewArticleDto(1);

  constructor(private blogService: BlogService, private router: Router){}

  addArticle(){
    this.blogService.newArticle(this.model)
    .subscribe(dati => this.router.navigate(["blog"]))
  }
}
