import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Pokemon } from 'src/app/models/pokemons';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.css']
})
export class PokemonsListComponent implements OnInit {

  pokemons: Pokemon [] = []

  // buffering prima che carichi la pagina 
  loading = true;




  constructor(private PokemonService: PokemonsService,
    private snackBar: MatSnackBar){}

  ngOnInit(): void {
  this.PokemonService.search().subscribe(dati => { this.pokemons = dati.data; this.loading = false})

  cattura(pokemons: Pokemon){
    this.PokemonService.cattura(pokemon).subscribe(p=> {
      this.snackBar.open(`${pokemon.name} catturato con successo.`, "OK")
    })
  }
}
}
