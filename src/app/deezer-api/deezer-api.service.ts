import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchResponse } from './interfaces';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeezerApiService {
  private readonly baseUrl: string = environment.apiUrl;
  constructor(
    private readonly http: HttpClient,
  ) {}
  search$(value: string): Observable<SearchResponse> {
    const params: HttpParams | undefined = value ? new HttpParams()
      .set('q', value)
      .set('order', 'RATING_DESC') : undefined;
    return this.http.request<SearchResponse>('GET',   `${this.baseUrl}/search/artist`, {
        params
      }
    );
  }
}
