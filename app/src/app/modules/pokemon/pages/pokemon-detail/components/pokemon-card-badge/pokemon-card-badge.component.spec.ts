import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCardBadgeComponent } from './pokemon-card-badge.component';

describe('PokemonCardBadgeComponent', () => {
  let component: PokemonCardBadgeComponent;
  let fixture: ComponentFixture<PokemonCardBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonCardBadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonCardBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
