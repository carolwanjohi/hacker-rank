import { NgModule } from '@angular/core';
import { ArtistProfileComponent } from './artist-profile.component';
import { CommonModule } from '@angular/common';
import { ArtistProfileRoutingModule } from './artist-profile-routing.module';
import { ArtistProfileService } from './artist-profile.service';

@NgModule({
  imports: [
    CommonModule,
    ArtistProfileRoutingModule,
  ],
  declarations: [ArtistProfileComponent],
  exports: [ArtistProfileComponent],
  providers: [ArtistProfileService],
})
export class ArtistProfileModule {}
