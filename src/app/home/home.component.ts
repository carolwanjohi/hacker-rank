import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HomeService } from './home.service';
import { Observable, Subject } from 'rxjs';
import { ArtistResponse } from '../deezer-api';
import { debounceTime, switchMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy{
  readonly destroy$: Subject<void> = new Subject<void>();
  readonly form: FormGroup = new FormGroup({
    search: new FormControl(null),
  });
  readonly searchResults$: Observable<ArtistResponse[]> = this.homeService.searchResults$.asObservable();
  constructor(
    private readonly homeService: HomeService
  ) {}
  ngOnInit(): void {
    this.form.controls.search.valueChanges.pipe(
      takeUntil(this.destroy$),
      debounceTime(200),
      switchMap((value: string) => this.homeService.search$(value))
    ).subscribe();
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
