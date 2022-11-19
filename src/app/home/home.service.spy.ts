import { HomeService } from './home.service';

export function HomeServiceSpy(): jasmine.SpyObj<HomeService> {
  return jasmine.createSpyObj('HomeService', ['search$']);
}
