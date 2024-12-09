import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCardDescriptionComponent } from './pokemon-card-description.component';

describe('PokemonCardDescriptionComponent', () => {
  let component: PokemonCardDescriptionComponent;
  let fixture: ComponentFixture<PokemonCardDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonCardDescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonCardDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
