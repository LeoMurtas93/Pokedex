import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { ArticleAddComponent } from './components/article-add/article-add.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';

const routes: Routes = [
  {path:"blog", component: ArticlesListComponent},
  {
    path: "blog/nuovo", component: ArticleAddComponent
  },
  {
    path: "blog/:id", component: ArticleDetailComponent
  },
  {path: "", redirectTo: "/blog", pathMatch: "full"} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
