import { Component, Input, Output, EventEmitter, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Pokemon } from '../../../../models/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements AfterViewInit {
  @Input() pokemons: Pokemon[] = [];
  @Output() loadMore: EventEmitter<void> = new EventEmitter<void>();

  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    this.scrollContainer.nativeElement.addEventListener('scroll', this.onScroll.bind(this));
  }


  onScroll(): void {
    const container = this.scrollContainer.nativeElement;
    const threshold = 100;
    const atBottom = container.scrollHeight - container.scrollTop - container.clientHeight <= threshold;

    if (atBottom) {
      this.loadMore.emit();
    }
  }
}
