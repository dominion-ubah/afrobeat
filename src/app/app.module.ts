import { ToastModule } from './typescripts/pro/alerts/toast/toast.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AfrobeatRouting } from './app.routing';
import 'hammerjs';

import { MDBBootstrapModule } from './typescripts/free';
import { MDBBootstrapModulePro } from './typescripts/pro/index';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBSpinningPreloader } from './typescripts/pro/index';

import { NavbarComponent } from './navbar/navbar.component';
import { BaseComponent } from './base/base.component';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { TvComponent } from './tv/tv.component';
import { MusicComponent } from './music/music.component';
import { AdminEntryComponent } from './admin-entry/admin-entry.component';
import { AdminComponent } from './admin/admin.component';

import { NgxCarouselModule } from 'ngx-carousel';
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { AdminContentComponent } from './admin-content/admin-content.component';
import { AdminNewsMainComponent } from './admin-news-main/admin-news-main.component';
import { AdminTvMainComponent } from './admin-tv-main/admin-tv-main.component';
import { AdminMusicMainComponent } from './admin-music-main/admin-music-main.component';
import { AdminCelebMainComponent } from './admin-celeb-main/admin-celeb-main.component';
import { AdminUsersMainComponent } from './admin-users-main/admin-users-main.component';
import { AdminVideoMainComponent } from './admin-video-main/admin-video-main.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { MainNewsComponent } from './main-news/main-news.component';
import { AdminNewsViewComponent } from './admin-news-view/admin-news-view.component';
import { AdminNewsCategoryComponent } from './admin-news-category/admin-news-category.component';

import { SearchPipe } from './shared/pipes/search.pipe';
import { MainNewsDetailComponent } from './main-news-detail/main-news-detail.component';
import { MainMusicComponent } from './main-music/main-music.component';
import { AlbumsComponent } from './albums/albums.component';
import { ArtistsComponent } from './artists/artists.component';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { MusicVideoComponent } from './music-video/music-video.component';
import { MusicHomeComponent } from './music-home/music-home.component';
import { MusicPlayerPageComponent } from './music-player-page/music-player-page.component';
import { FooterComponent } from './footer/footer.component';
import { MainTvComponent } from './main-tv/main-tv.component';
import { MainCelebsComponent } from './main-celebs/main-celebs.component';
import { MainEventsComponent } from './main-events/main-events.component';
import { MoviesComponent } from './movies/movies.component';
import { InterviewsComponent } from './interviews/interviews.component';
import { TvSeriesComponent } from './tv-series/tv-series.component';
import { EventsComponent } from './events/events.component';
import { AdvertsComponent } from './adverts/adverts.component';
import { LoadingComponent } from './loading/loading.component';
import { IreportComponent } from './ireport/ireport.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BaseComponent,
    MusicPlayerComponent,
    HomeComponent,
    NewsComponent,
    TvComponent,
    MusicComponent,
    AdminEntryComponent,
    AdminComponent,
    AdminNavComponent,
    AdminContentComponent,
    AdminNewsMainComponent,
    AdminTvMainComponent,
    AdminMusicMainComponent,
    AdminCelebMainComponent,
    AdminUsersMainComponent,
    AdminVideoMainComponent,
    MainHomeComponent,
    MainNewsComponent,
    AdminNewsViewComponent,
    AdminNewsCategoryComponent,
    SearchPipe,
    MainNewsDetailComponent,
    MainMusicComponent,
    AlbumsComponent,
    ArtistsComponent,
    AlbumComponent,
    ArtistComponent,
    MusicVideoComponent,
    MusicHomeComponent,
    MusicPlayerPageComponent,
    FooterComponent,
    MainTvComponent,
    MainCelebsComponent,
    MainEventsComponent,
    MoviesComponent,
    InterviewsComponent,
    TvSeriesComponent,
    EventsComponent,
    AdvertsComponent,
    LoadingComponent,
    IreportComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ToastModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    MDBBootstrapModulePro.forRoot(),
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: 'Your_api_key'
    }),
    RouterModule,
    AfrobeatRouting,
    NgxCarouselModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
  ],
  providers: [MDBSpinningPreloader],
  bootstrap: [AppComponent],
  schemas:      [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
