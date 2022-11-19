import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HomeService } from './home.service';
import { Observable } from 'rxjs';
import { SearchResponse } from '../deezer-api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  readonly form: FormGroup = new FormGroup({
    search: new FormControl(null),
  });
  readonly searchResults$: Observable<SearchResponse[]> = this.homeService.searchResults$;
  constructor(
    private readonly homeService: HomeService
  ) {}

  search(): void {
    if (this.form.controls.search.value) {
      this.homeService.search$(this.form.controls.search.value).subscribe();
    }
  }
}
