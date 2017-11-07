import { Router, Routes, RouterModule, ActivatedRoute, PreloadAllModules } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { NavbarComponent } from './navbar/navbar.component';
import { BaseComponent } from './base/base.component';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AdminEntryComponent } from './admin-entry/admin-entry.component'; // make useful
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

const AfrobeatRoutes: Routes = [
    { 
        path: "",
        component: BaseComponent,
        children:[
            {
                path: "",
                component: MainHomeComponent,
                children: [
                    { path: "", component: NavbarComponent},
                    { path: "", component: MusicPlayerComponent},
                    { path: "home", component: HomeComponent},
                    // {PreloadingStrategy: PreloadAllModules; }
                ]
            },
            {
                path: "news",
                component: MainNewsComponent,
                children: [

                ]
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
