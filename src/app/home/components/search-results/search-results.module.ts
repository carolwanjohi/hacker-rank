import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './search-results.component';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  imports: [
    CommonModule,
    MatCardModule
  ],
  declarations: [
    SearchResultsComponent
  ],
  exports: [SearchResultsComponent]
})
export class SearchResultsModule { }
