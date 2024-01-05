import { Component } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemons';
import { AuthService } from 'src/app/services/auth.service';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemon-catch',
  templateUrl: './pokemon-catch.component.html',
  styleUrls: ['./pokemon-catch.component.css']
})
export class PokemonCatchComponent {

  pokemons: Pokemon []=[];
  constructor(private pokemonService: PokemonsService, private authService: AuthService){}

  ngOnInit(): void {
    this.pokemonService

    if(!this.authService.isUserLogged){

    }
  }

}
