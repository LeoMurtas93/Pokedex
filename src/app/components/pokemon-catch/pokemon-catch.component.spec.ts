import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCatchComponent } from './pokemon-catch.component';

describe('PokemonCatchComponent', () => {
  let component: PokemonCatchComponent;
  let fixture: ComponentFixture<PokemonCatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonCatchComponent]
    });
    fixture = TestBed.createComponent(PokemonCatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
