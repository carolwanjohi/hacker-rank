import { Component, Input } from '@angular/core';
import { SearchResponse } from '../../../deezer-api';

@Component({
  selector: 'app-search-results[searchResults]',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {
 @Input() searchResults!: SearchResponse[] | null;
}
