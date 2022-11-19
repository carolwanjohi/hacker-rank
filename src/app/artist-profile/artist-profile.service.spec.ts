import { ArtistProfileService } from './artist-profile.service';
import { DeezerApiService } from '../deezer-api';
import { deezerApiServiceSpy } from '../deezer-api/deezer-api.service.spy';
import { of } from 'rxjs';
import { ARTIST_RESPONSE_MOCK } from '../deezer-api/interfaces/artist-response.mock';

describe('ArtistProfileService', () => {
  let service: ArtistProfileService;
  let deezerApiService: jasmine.SpyObj<DeezerApiService>;
  beforeEach(() => {
    deezerApiService = deezerApiServiceSpy();
    deezerApiService.getArtist$.and.returnValue(of(ARTIST_RESPONSE_MOCK));
    service = new ArtistProfileService(deezerApiService);
  });
  it('should fetch an artist', () => {
    const artistId = '1';
    service.loadArtist$(artistId).subscribe();
    expect(deezerApiService.getArtist$).toHaveBeenCalledOnceWith(artistId);
    expect(service.artistProfile$.getValue()).toEqual(ARTIST_RESPONSE_MOCK);
  });
});
