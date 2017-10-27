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
    AdminComponent
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
