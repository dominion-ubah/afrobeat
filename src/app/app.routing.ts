import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

// import { NavbarComponent } from './navbar/navbar.component';
import { BaseComponent } from './base/base.component';
// import { MusicPlayerComponent } from './music-player/music-player.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AdminEntryComponent } from './admin-entry/admin-entry.component'; // make useful
// import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { AdminContentComponent } from './admin-content/admin-content.component';
import { AdminNewsMainComponent } from './admin-news-main/admin-news-main.component';
import { AdminTvMainComponent } from './admin-tv-main/admin-tv-main.component';
import { AdminMusicMainComponent } from './admin-music-main/admin-music-main.component';
import { AdminCelebMainComponent } from './admin-celeb-main/admin-celeb-main.component';
import { AdminUsersMainComponent } from './admin-users-main/admin-users-main.component';
import { AdminVideoMainComponent } from './admin-video-main/admin-video-main.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { MainNewsComponent } from './main-news/main-news.component';
import { MainMusicComponent } from './main-music/main-music.component';
import { MainTvComponent } from './main-tv/main-tv.component';
import { MainEventsComponent } from './main-events/main-events.component';
import { MainCelebsComponent } from './main-celebs/main-celebs.component';
import { AdminNewsViewComponent } from './admin-news-view/admin-news-view.component';
import { AdminNewsCategoryComponent } from './admin-news-category/admin-news-category.component';
import { MainNewsDetailComponent } from './main-news-detail/main-news-detail.component';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
// import { LoadingComponent } from './loading/loading.component';
import { MusicPlayerPageComponent } from './music-player-page/music-player-page.component';
import { IreportComponent } from './ireport/ireport.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { TvseriesDetailsComponent } from './tvseries-details/tvseries-details.component';
import { InterviewDetailsComponent } from './interview-details/interview-details.component';
import { ViewAllComponent } from './view-all/view-all.component';
import { CelebrityDetailComponent } from './celebrity-detail/celebrity-detail.component';


const AfrobeatRoutes: Routes = [
//     {
// path:  "",
// component: LoadingComponent
//     },
    {
        path: "",
        component: BaseComponent,
        children:[
            {
                path: "",
                component: MainHomeComponent,
                children: [
                    { path: "home", component: HomeComponent},
                    // {PreloadingStrategy: PreloadAllModules; }
                ]
            },
            {
                path: "news",
                component: MainNewsComponent,
                // children: [
                //     {
                //         path: "news-detail",
                //         component: MainNewsDetailComponent
                //     }
                // ]
            },
            {
                path: "music",
                component: MainMusicComponent,
                // children: [
                //     {
                //         path: "news-detail",
                //         component: MainNewsDetailComponent
                //     }
                // ]
            },
            {
                path: "ireport",
                component: IreportComponent,
                // children: [
                //     {
                //         path: "news-detail",
                //         component: MainNewsDetailComponent
                //     }
                // ]
            },
            {
                path: "tv",
                component: MainTvComponent,
                // children: [
                //     {
                //         path: "news-detail",
                //         component: MainNewsDetailComponent
                //     }
                // ]
            },
            {
                path: "celebs",
                component: MainCelebsComponent,
                // children: [
                //     {
                //         path: "news-detail",
                //         component: MainNewsDetailComponent
                //     }
                // ]
            },
            {
                path: "events",
                component: MainEventsComponent,
                // children: [
                //     {
                //         path: "news-detail",
                //         component: MainNewsDetailComponent
                //     }
                // ]
            },
            {
                path: "news-detail",
                component: MainNewsDetailComponent,
                // children: [
                //     {
                //         
                //     }
                // ]
            },
            {
                path: "artist-detail",
                component: ArtistComponent,
                // children: [
                //     {
                //         
                //     }
                // ]
            },
            {
                path: "album-detail",
                component: AlbumComponent,
                // children: [
                //     {
                //         
                //     }
                // ]
            },
            {
                path: "song",
                component: MusicPlayerPageComponent,
                // children: [
                //     {
                //         
                //     }
                // ]
            },
            {
                path: "movie-details",
                component: MovieDetailsComponent,
                // children: [
                //     {
                //         
                //     }
                // ]
            },
            {
                path: "tvseries-details",
                component: TvseriesDetailsComponent,
                // children: [
                //     {
                //         
                //     }
                // ]
            },
            {
                path: "interview-details",
                component: InterviewDetailsComponent,
                // children: [
                //     {
                //         
                //     }
                // ]
            },
            {
                path: "view-all",
                component: ViewAllComponent,
                // children: [
                //     {
                //         
                //     }
                // ]
            },
            {
                path: "celebrity-details",
                component: CelebrityDetailComponent,
                // children: [
                //     {
                //         
                //     }
                // ]
            }
        ]
    },
    {
        path: "login",
        component:AdminEntryComponent,
        children:[

        ]
    },
    {
        path: "admin",
        component:AdminComponent,
        children:[
            {path: "", component: AdminContentComponent, children:[
                {path: "", component: AdminNewsMainComponent, children:[
                    {path: "", component: AdminNewsViewComponent },
                    {path: "admin-news-category", component: AdminNewsCategoryComponent }
                ] },
                {path: "video-admin", component: AdminVideoMainComponent },
                {path: "tv-admin", component: AdminTvMainComponent }, 
                {path: "music-admin", component: AdminMusicMainComponent }, 
                {path: "celeb-admin", component: AdminCelebMainComponent }, 
                {path: "user-admin", component: AdminUsersMainComponent }
            ] } ,

        ]
    },

//      { path: "", redirectTo: "/login", pathMatch: "full" },
//      { path: "404", component: NotFoundComponent },
        { path: "**", redirectTo: "/404" }
];

export const AfrobeatRouting: ModuleWithProviders = RouterModule.forRoot(
    AfrobeatRoutes
);
