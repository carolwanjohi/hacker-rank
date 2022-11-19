import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchDataResponse } from './interfaces';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeezerApiService {
  readonly baseUrl: string = environment.apiUrl;
  constructor(
    private readonly http: HttpClient,
  ) {}
  search$(value: string): Observable<SearchDataResponse> {
    const params: HttpParams | undefined = value ? new HttpParams()
      .set('q', `artist:"${value}"`)
      .set('order', 'RATING_DESC') : undefined;
    return this.http.request<SearchDataResponse>('GET',   `${this.baseUrl}/search`, {
        params
      }
    );
  }
}
