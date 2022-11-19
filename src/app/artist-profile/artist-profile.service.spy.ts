import { ArtistProfileService } from './artist-profile.service';
import { BehaviorSubject } from 'rxjs';
import { ArtistResponse } from '../deezer-api';
import { ARTIST_RESPONSE_MOCK } from '../deezer-api/interfaces/artist-response.mock';

export function artistProfileServiceSpy(): jasmine.SpyObj<ArtistProfileService> {
  return jasmine.createSpyObj('ArtistProfileService', ['loadArtist$'], {
    artistProfile$: new BehaviorSubject<ArtistResponse>(ARTIST_RESPONSE_MOCK)
  });
}
