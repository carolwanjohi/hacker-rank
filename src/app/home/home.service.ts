import { Injectable } from '@angular/core';
import { ArtistResponse, DeezerApiService, SearchResponse } from '../deezer-api';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class HomeService {
  readonly searchResults$: BehaviorSubject<ArtistResponse[]> = new BehaviorSubject<ArtistResponse[]>([]);
  constructor(
    private readonly deezerApiService: DeezerApiService
  ) {}
  search$(value: string): Observable<ArtistResponse[]> {
    if (value.length) {
      return this.deezerApiService.search$(value).pipe(
        map((searchResults: SearchResponse) => searchResults.data),
        tap((searchResults: ArtistResponse[]) => this.searchResults$.next(searchResults)),
      );
    } else {
      return of([]).pipe(
        tap((searchResults: ArtistResponse[]) => this.searchResults$.next(searchResults)),
    );
    }
  }
}
