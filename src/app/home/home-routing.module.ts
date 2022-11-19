import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const HOME_ROUTES: Route[] = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'artist/:id',
    loadChildren: () => import('../artist-profile').then((m) => m.ArtistProfileModule),
  }
];
@NgModule({
  imports: [RouterModule.forChild(HOME_ROUTES)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
