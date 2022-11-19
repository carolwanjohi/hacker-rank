import { Injectable } from '@angular/core';
import { DeezerApiService, SearchDataResponse, SearchResponse } from '../deezer-api';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';

@Injectable()
export class HomeService {
  private searchResponse$: BehaviorSubject<SearchResponse[]> = new BehaviorSubject<SearchResponse[]>([]);
  searchResults$: Observable<SearchResponse[]> = this.searchResponse$.asObservable().pipe(
    startWith([])
  );
  constructor(
    private readonly searchService: DeezerApiService
  ) {}
  search$(value: string): Observable<SearchResponse[]> {
    return this.searchService.search$(value).pipe(
      map((searchResults: SearchDataResponse) => searchResults.data),
      tap((searchResults: SearchResponse[]) => this.searchResponse$.next(searchResults)),
    );
  }
}
