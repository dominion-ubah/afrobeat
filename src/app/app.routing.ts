import { Router, Routes, RouterModule, ActivatedRoute } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { NavbarComponent } from './navbar/navbar.component';
import { BaseComponent } from './base/base.component';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AdminEntryComponent } from './admin-entry/admin-entry.component';

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

        ]
    },

//      { path: "", redirectTo: "/login", pathMatch: "full" },
//      { path: "404", component: NotFoundComponent },
        { path: "**", redirectTo: "/404" }
];

export const AfrobeatRouting: ModuleWithProviders = RouterModule.forRoot(
    AfrobeatRoutes
);
