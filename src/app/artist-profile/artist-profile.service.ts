import { Injectable } from '@angular/core';
import { ArtistResponse, DeezerApiService } from '../deezer-api';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class ArtistProfileService {
  readonly artistProfile$: BehaviorSubject<ArtistResponse | null> = new BehaviorSubject<ArtistResponse | null>(null);
  constructor(
    private readonly deezerApiService: DeezerApiService,
  ) {}
  loadArtist$(value: string): Observable<ArtistResponse> {
    return this.deezerApiService.getArtist$(value).pipe(
      tap((response: ArtistResponse) =>  this.artistProfile$.next(response)),
    );
  }
}
