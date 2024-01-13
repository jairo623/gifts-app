import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-Page.component';
import { SearchBoxComponent } from './components/search-box/search.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { HttpClientModule } from '@angular/common/http';
import { GifsCardComponent } from './components/gifs-card/gifs-card.component';
import { SharedModule } from '../shared/shared.module';
import { LazyImageComponent } from '../shared/components/lazy-image/lazy-image.component';

@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent,
    GifsCardComponent,
  ],
  imports: [CommonModule, HttpClientModule, SharedModule],
  exports: [HomePageComponent],
})
export class GifsModule {}
