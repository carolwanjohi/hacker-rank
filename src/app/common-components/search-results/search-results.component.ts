import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ArtistResponse } from '../../deezer-api';

@Component({
  selector: 'app-search-results[searchResults]',
  templateUrl: './search-results.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultsComponent {
 @Input() searchResults!: ArtistResponse[] | null;
 @Output() selectedArtist = new EventEmitter<number>();
}
