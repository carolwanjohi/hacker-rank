import { DeezerApiService } from './deezer-api.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

describe('DeezerApiService', () => {
  let service: DeezerApiService;
  let httpSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpSpy = jasmine.createSpyObj('HttpClient', ['request']);
    service = new DeezerApiService(httpSpy);
  });
  afterEach(() => {
    httpSpy.request.calls.reset();
  });
  it('should search for artists', () => {
    const searchTerm = 'artist';
    service.search$(searchTerm);
    const expectedParams: HttpParams = new HttpParams().set('q', searchTerm).set('order', 'RATING_DESC');
    expect(httpSpy.request).toHaveBeenCalledWith(
      'GET', `${environment.apiUrl}/search/artist`,
      {
        params: expectedParams
      });
  });
  it('should fetch the artist', () => {
    const artistId = '1';
    service.getArtist$(artistId);
    expect(httpSpy.request).toHaveBeenCalledWith(
      'GET', `${environment.apiUrl}/artist/${artistId}`);
  });
  it('should fetch the artist`s top tracks', () => {
    const artistId = '1';
    service.getTopTracks$(artistId);
    expect(httpSpy.request).toHaveBeenCalledWith(
      'GET', `${environment.apiUrl}/artist/${artistId}/top?limit=5`);
  });
});
