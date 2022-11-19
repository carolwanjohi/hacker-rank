import { ArtistProfileComponent } from './artist-profile.component';
import { ActivatedRoute } from '@angular/router';
import { ArtistProfileService } from './artist-profile.service';
import { artistProfileServiceSpy } from './artist-profile.service.spy';
import { ARTIST_RESPONSE_MOCK } from '../deezer-api/interfaces/artist-response.mock';
import { of } from 'rxjs';
import { fakeAsync, tick } from '@angular/core/testing';
import { ArtistResponse } from '../deezer-api';
import { take } from 'rxjs/operators';

describe('ArtistProfileComponent', () => {
  let component: ArtistProfileComponent;
  let activatedRoute: jasmine.SpyObj<ActivatedRoute>;
  let artistProfileService: jasmine.SpyObj<ArtistProfileService>;
  const artistId = '1';
  beforeEach(() => {
    activatedRoute = jasmine.createSpyObj('ActivatedRoute', [], {
      snapshot: {
        params: {
          id: artistId
        }
      }
    });
    artistProfileService = artistProfileServiceSpy();
    artistProfileService.loadArtist$.and.returnValue(of(ARTIST_RESPONSE_MOCK));
    component = new ArtistProfileComponent(activatedRoute, artistProfileService);
  });
  it('should fetch the artists information', fakeAsync(() => {
    component.ngOnInit();
    tick();
    expect(artistProfileService.loadArtist$).toHaveBeenCalledOnceWith(artistId);
    component.artist$.pipe(take(1)).subscribe((actual: ArtistResponse | null) => {
      expect(actual).toEqual(ARTIST_RESPONSE_MOCK);
    });
  }));
});
