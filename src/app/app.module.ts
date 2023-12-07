import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from"@angular/common/http"
import {FormsModule} from "@angular/forms"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';

import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { ArticleAddComponent } from './components/article-add/article-add.component';

import{MatFormFieldModule} from "@angular/material/form-field";
import{MatInputModule} from "@angular/material/input";
import{MatCheckboxModule} from "@angular/material/checkbox";
import{MatSelectModule} from "@angular/material/select";
import { ArticlePreviewComponent } from './components/article-preview/article-preview.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { BlogComponent } from './components/blog/blog.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { PokemonsListComponent } from './components/pokemons-list/pokemons-list.component';
import { PokemonsDetailComponent } from './components/pokemons-detail/pokemons-detail.component'
import {MatSidenavModule} from '@angular/material/sidenav';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ArticlesListComponent,
    ArticleAddComponent,
    ArticlePreviewComponent,
    ArticleDetailComponent,
    BlogComponent,
    PokemonsComponent,
    PokemonsListComponent,
    PokemonsDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule, 
    MatListModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
