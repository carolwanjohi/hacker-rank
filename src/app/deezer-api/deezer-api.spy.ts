import { DeezerApiService } from './deezer-api.service';

export function deezerApiSpy(): jasmine.SpyObj<DeezerApiService> {
  return jasmine.createSpyObj('DeezerApiService', ['search$']);
}
