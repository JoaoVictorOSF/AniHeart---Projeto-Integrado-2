import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MangaComponent } from './manga/manga.component';
import { MangaCardComponent } from './manga/manga-card/manga-card.component';
import { MangaDetailComponent } from './manga/manga-detail/manga-detail.component';
import { MangaListComponent } from './manga/manga-list/manga-list.component';
import { MangaFeaturedComponent } from './manga/manga-featured/manga-featured.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    MangaComponent,
    MangaCardComponent,
    MangaDetailComponent,
    MangaListComponent,
    MangaFeaturedComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
