import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AfrobeatRouting } from './app.routing'
import 'hammerjs';

import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
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
    ArtistsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MDBBootstrapModule.forRoot(),
    RouterModule,
    AfrobeatRouting,
    NgxCarouselModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
