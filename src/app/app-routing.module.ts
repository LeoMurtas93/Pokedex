import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { ArticleAddComponent } from './components/article-add/article-add.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { BlogComponent } from './components/blog/blog.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { PokemonsListComponent } from './components/pokemons-list/pokemons-list.component';
import { PokemonsDetailComponent } from './components/pokemons-detail/pokemons-detail.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: "login", component: LoginComponent
  },
  {
    path: "register", component: RegisterComponent
  },
  {
    path: "blog", component: BlogComponent, 
    children: [
      {
        path: "", component: ArticlesListComponent
      },
      {
        path: "nuovo", component: ArticleAddComponent
      },
      {
        path: ":id", component: ArticleDetailComponent
      }
    ]
  },
  {
    path: "pokemons", component: PokemonsComponent,
    children: [
      {
        path: "", component: PokemonsListComponent
      },
      {
        path: ":codice", component: PokemonsDetailComponent
      }
    ]
  },

  {path: "", redirectTo: "/blog", pathMatch: "full"} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
