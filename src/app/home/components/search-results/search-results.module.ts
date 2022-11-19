import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './search-results.component';
@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    SearchResultsComponent
  ],
  exports: [SearchResultsComponent]
})
export class SearchResultsModule { }
