import { Injectable } from '@angular/core';
import { ArtistResponse, DeezerApiService, SearchResponse } from '../deezer-api';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';

@Injectable()
export class HomeService {
  private searchResponse$: BehaviorSubject<ArtistResponse[]> = new BehaviorSubject<ArtistResponse[]>([]);
  searchResults$: Observable<ArtistResponse[]> = this.searchResponse$.asObservable().pipe(
    startWith([])
  );
  constructor(
    private readonly searchService: DeezerApiService
  ) {}
  search$(value: string): Observable<ArtistResponse[]> {
    return this.searchService.search$(value).pipe(
      map((searchResults: SearchResponse) => searchResults.data),
      tap((searchResults: ArtistResponse[]) => this.searchResponse$.next(searchResults)),
    );
  }
}
