import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistProfileService } from './artist-profile.service';
import { Observable, Subject } from 'rxjs';
import { ArtistResponse } from '../deezer-api';

@Component({
  selector: 'app-artist-profile',
  templateUrl: './artist-profile.component.html',
  styleUrls: ['./artist-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArtistProfileComponent implements OnInit, OnDestroy {
  readonly destroy$: Subject<void> = new Subject<void>();
  readonly artist$: Observable<ArtistResponse | null> = this.artistProfileService.artistProfile$.asObservable();
  readonly breadcrumbs: {url: string, title: string} = {
      url: '',
      title: 'Search',
    };
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly artistProfileService: ArtistProfileService,
  ) {}
  ngOnInit(): void{
    this.artistProfileService.loadArtist$(
      this.activatedRoute.snapshot.params.id
    ).pipe()
      .subscribe();
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
