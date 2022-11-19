import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistProfileService } from './artist-profile.service';
import { Observable } from 'rxjs';
import { ArtistResponse } from '../deezer-api';

@Component({
  selector: 'app-artist-profile',
  templateUrl: './artist-profile.component.html'
})
export class ArtistProfileComponent implements OnInit {
  readonly artist$: Observable<ArtistResponse | null> = this.artistProfileService.artistProfile$.asObservable();
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly artistProfileService: ArtistProfileService,
  ) {}
  ngOnInit(): void{
    this.artistProfileService.loadArtist$(
      this.activatedRoute.snapshot.params.id
    ).subscribe();
  }
}
