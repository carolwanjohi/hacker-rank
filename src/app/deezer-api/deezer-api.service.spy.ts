import { DeezerApiService } from './deezer-api.service';

export function deezerApiServiceSpy(): jasmine.SpyObj<DeezerApiService> {
  return jasmine.createSpyObj('DeezerApiService', ['search$', 'getArtist$', 'getTopTracks$']);
}
