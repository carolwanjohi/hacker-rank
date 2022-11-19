import { DeezerApiService } from './deezer-api.service';
import { HttpClient, HttpParams } from '@angular/common/http';

describe('DeezerApiService', () => {
  let service: DeezerApiService;
  let httpSpy: jasmine.SpyObj<HttpClient>;
  const searchTerm = 'artist';

  beforeEach(() => {
    httpSpy = jasmine.createSpyObj('HttpClient', ['request']);
    service = new DeezerApiService(httpSpy);
  });
  afterEach(() => {
    httpSpy.request.calls.reset();
  });

  it('should search for artists', () => {
    service.search$(searchTerm);
    const expectedParams: HttpParams = new HttpParams().set('q', searchTerm).set('order', 'RATING_DESC');
    expect(httpSpy.request).toHaveBeenCalledWith(
      'GET', 'http://cors-anywhere.herokuapp.com/https://api.deezer.com//search/artist',
      {
        params: expectedParams
      });
  });
});
