import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewArticleDto } from 'src/app/models/articles';
import { Pokemon } from 'src/app/models/pokemons';
import { AuthService } from 'src/app/services/auth.service';
import { BlogService } from 'src/app/services/blog.service';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.css']
})
export class ArticleAddComponent {
  model?: NewArticleDto;
  pokemons: Pokemon[] = []

  constructor(
    private blogService: BlogService, private router: Router,
    private ps: PokemonsService,
    private authService: AuthService,
  ){}

  ngOnInit(): void {
    if (this.authService.isUserLogged){
      let lu = this.authService.getLoggedUser()!;

      this.model = new NewArticleDto(lu.user.id);

      this.ps.search(15)
      .subscribe(pokemons => this.pokemons = pokemons.data)
    }
  }

  addArticle(){
    this.blogService.newArticle(this.model!)
    .subscribe(dati => this.router.navigate(["/","blog"]))
  }
}
