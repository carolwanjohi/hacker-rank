import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HomeService } from './home.service';
import { Observable, Subject } from 'rxjs';
import { ArtistResponse } from '../deezer-api';
import { debounceTime, switchMap, takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, OnDestroy{
  readonly destroy$: Subject<void> = new Subject<void>();
  readonly form: FormGroup = new FormGroup({
    search: new FormControl(null),
  });
  readonly searchResults$: Observable<ArtistResponse[]> = this.homeService.searchResults$.asObservable();
  constructor(
    private readonly homeService: HomeService,
    private readonly router: Router,
  ) {}
  ngOnInit(): void {
    this.form.controls.search.valueChanges.pipe(
      takeUntil(this.destroy$),
      debounceTime(200),
      switchMap((value: string) => this.homeService.search$(value))
    ).subscribe();
  }
  navigateToSelectedArtist(artistId: number): void {
    this.router.navigate(['artist', artistId]);
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
