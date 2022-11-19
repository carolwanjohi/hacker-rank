import { HomeComponent } from './home.component';
import { HomeService } from './home.service';
import { homeServiceSpy } from './home.service.spy';
import { fakeAsync, tick } from '@angular/core/testing';
import { BehaviorSubject, of } from 'rxjs';
import { SEARCH_RESPONSE_MOCK } from '../deezer-api/interfaces/search-response.mock';
import { take } from 'rxjs/operators';
import { ArtistResponse } from '../deezer-api';
import { Router } from '@angular/router';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let homeService: jasmine.SpyObj<HomeService>;
  let router: jasmine.SpyObj<Router>;
  beforeEach(() => {
    homeService = homeServiceSpy();
    homeService.search$.and.returnValue(of(SEARCH_RESPONSE_MOCK.data));
    Object.defineProperty(homeService, 'searchResults$', {
      value: new BehaviorSubject<ArtistResponse[]>(SEARCH_RESPONSE_MOCK.data)
    });
    router = jasmine.createSpyObj('Router', ['navigate']);
    component = new HomeComponent(homeService, router);
  });
  it('should search for an artist', fakeAsync(() => {
    const searchTerm = 'search';
    component.ngOnInit();
    component.form.controls.search.patchValue(searchTerm);
    tick(200);
    expect(homeService.search$).toHaveBeenCalledOnceWith(searchTerm);
    component.searchResults$.pipe(take(1)).subscribe((actual: ArtistResponse[]) => {
      expect(actual).toEqual(SEARCH_RESPONSE_MOCK.data);
    });
  }));
  it('should navigate to the artist`s profile', () => {
    const artistId = 1;
    component.navigateToSelectedArtist(artistId);
    expect(router.navigate).toHaveBeenCalledOnceWith(['artist', artistId]);
  });
});
