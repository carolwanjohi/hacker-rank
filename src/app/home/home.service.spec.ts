import { HomeService } from './home.service';
import { DeezerApiService } from '../deezer-api';
import { deezerApiServiceSpy, SEARCH_RESPONSE } from '../deezer-api/testing';
import { of } from 'rxjs';

describe('HomeService', () => {
  let service: HomeService;
  let deezerApiService: jasmine.SpyObj<DeezerApiService>;
  beforeEach(() => {
    deezerApiService = deezerApiServiceSpy();
    deezerApiService.search$.and.returnValue(of(SEARCH_RESPONSE));
    service = new HomeService(deezerApiService);
  });
  it('should update searchResults$ with the results', () => {
    const searchTerm = 'artist';
    service.search$(searchTerm).subscribe();
    expect(deezerApiService.search$).toHaveBeenCalledOnceWith(searchTerm);
    expect(service.searchResults$.getValue()).toEqual(SEARCH_RESPONSE.data);
  });
  it('should update searchResults$ with an empty list when the search is empty', () => {
    const searchTerm = '';
    service.search$(searchTerm).subscribe();
    expect(deezerApiService.search$).not.toHaveBeenCalled();
    expect(service.searchResults$.getValue()).toEqual([]);
  });
});
