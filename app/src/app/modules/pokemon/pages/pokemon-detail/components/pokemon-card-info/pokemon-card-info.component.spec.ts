import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCardInfoComponent } from './pokemon-card-info.component';

describe('PokemonCardInfoComponent', () => {
  let component: PokemonCardInfoComponent;
  let fixture: ComponentFixture<PokemonCardInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonCardInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonCardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
