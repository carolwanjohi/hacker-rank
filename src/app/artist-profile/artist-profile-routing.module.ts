import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ArtistProfileComponent } from './artist-profile.component';

const ARTIST_PROFILE_ROUTES: Route[] = [
  {
    path: '',
    component: ArtistProfileComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(ARTIST_PROFILE_ROUTES)],
  exports: [RouterModule]
})
export class ArtistProfileRoutingModule {}
