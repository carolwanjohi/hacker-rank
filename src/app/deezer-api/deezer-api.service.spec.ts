import { DeezerApiService } from './deezer-api.service';
import { HttpClient } from '@angular/common/http';

describe('DeezerApiService', () => {
  let service: DeezerApiService;
  let httpSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpSpy = jasmine.createSpyObj('HttpClient', ['request']);
    service = new DeezerApiService(httpSpy);
  });

  it('should search for artists and return them', () => {

  });
});
