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
import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS} from "@angular/material/snack-bar";
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { ArticleAddComponent } from './components/article-add/article-add.component';

import{MatFormFieldModule} from "@angular/material/form-field";
import{MatInputModule} from "@angular/material/input";
import{MatCheckboxModule} from "@angular/material/checkbox";
import{MatSelectModule} from "@angular/material/select";
import{MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { ArticlePreviewComponent } from './components/article-preview/article-preview.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { BlogComponent } from './components/blog/blog.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { PokemonsListComponent } from './components/pokemons-list/pokemons-list.component';
import { PokemonsDetailComponent } from './components/pokemons-detail/pokemons-detail.component'
import {MatSidenavModule} from '@angular/material/sidenav';
import { PokemonsAttackComponent } from './components/pokemon-attack/pokemon-attack.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PokemonCatchComponent } from './components/pokemon-catch/pokemon-catch.component';



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
    PokemonsDetailComponent,
    PokemonsAttackComponent,
    LoginComponent,
    RegisterComponent,
    PokemonCatchComponent
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
    MatSidenavModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 3000, horizontalPosition: "right"}
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
