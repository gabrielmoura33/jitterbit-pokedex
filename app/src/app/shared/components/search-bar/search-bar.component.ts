import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  @Input() placeholder: string = 'Search...';
  @Output() search = new EventEmitter<string>();

  searchQuery: string = '';

  onSearch(): void {
    this.search.emit(this.searchQuery);
  }

  onSearchIconClick(): void {
    this.search.emit(this.searchQuery);
  }
}
