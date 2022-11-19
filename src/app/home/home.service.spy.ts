import { HomeService } from './home.service';

export function homeServiceSpy(): jasmine.SpyObj<HomeService> {
  return jasmine.createSpyObj('HomeService', ['search$'], ['searchResults$']);
}
