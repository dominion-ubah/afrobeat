import { Router, Routes, RouterModule, ActivatedRoute } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { NavbarComponent } from './navbar/navbar.component';
import { BaseComponent } from './base/base.component';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { HomeComponent } from './home/home.component';

const AfrobeatRoutes: Routes = [
    { 
        path: "",
        component: BaseComponent,
        children: [
            { path: "", component: NavbarComponent},
            { path: "", component: MusicPlayerComponent},
            { path: "home", component: HomeComponent},

        ]
    },

//      { path: "", redirectTo: "/login", pathMatch: "full" },
//      { path: "404", component: NotFoundComponent },
        { path: "**", redirectTo: "/404" }
];

export const AfrobeatRouting: ModuleWithProviders = RouterModule.forRoot(
    AfrobeatRoutes
);
