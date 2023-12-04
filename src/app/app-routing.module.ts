import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';

const routes: Routes = [
  {path:"blog", component: ArticlesListComponent},
  {path: "", redirectTo: "/blog", pathMatch: "full"} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
