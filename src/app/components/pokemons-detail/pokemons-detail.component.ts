import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemons';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemons-detail',
  templateUrl: './pokemons-detail.component.html',
  styleUrls: ['./pokemons-detail.component.css']
})
export class PokemonsDetailComponent {
  pokemon?: Pokemon;

  constructor(
    private ps: PokemonsService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    const codice = this.route.snapshot.paramMap.get("codice");

    if (codice) {
      this.ps.getById(codice)
        .subscribe(dati => this.pokemon = dati.data);
    }
  }


}
