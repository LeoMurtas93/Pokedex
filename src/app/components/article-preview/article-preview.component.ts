import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Article } from 'src/app/models/articles';

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.css']
})
export class ArticlePreviewComponent {
  @Input()
  article?: Article;

  @Output()
  onRichiestaEliminazione = new EventEmitter<number>();

  elimina(){
    this.onRichiestaEliminazione.emit(this.article!.id)
  }
}
