import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchDataResponse } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class DeezerApiService {
  constructor(
    private readonly http: HttpClient,
  ) {}

  // TODO: FETCH BASE URL FROM environment file
  search$(value: string): Observable<SearchDataResponse> {
    const params: HttpParams | undefined = value ? new HttpParams().set('q', `artist:"${value}"`) : undefined;
    return this.http.request<SearchDataResponse>('GET', 'http://cors-anywhere.herokuapp.com/https://api.deezer.com/search', {
        params
      }
    );
  }
}
