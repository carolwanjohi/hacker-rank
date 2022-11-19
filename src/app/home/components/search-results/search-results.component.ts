import { Component, Input } from '@angular/core';
import { ArtistResponse } from '../../../deezer-api';

@Component({
  selector: 'app-search-results[searchResults]',
  templateUrl: './search-results.component.html',
})
export class SearchResultsComponent {
 @Input() searchResults!: ArtistResponse[] | null;
}
