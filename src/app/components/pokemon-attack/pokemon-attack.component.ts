import { Component, Input } from '@angular/core';
import { Attack } from '../../models/pokemons';

@Component({
  selector: 'app-pokemons-attack',
  templateUrl: './pokemon-attack.component.html',
  // styleUrl: './pokemon-attack.component.css'
})
export class PokemonsAttackComponent {
  @Input("attacco")
  attack?: Attack;
}
