import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import { NgxCarousel } from 'ngx-carousel';

import { VgAPI } from 'videogular2/core';

export interface IMedia {
  title: string;
  src: string;
  type: string;
}

@Component({
  selector: 'app-music-video',
  templateUrl: './music-video.component.html',
  styleUrls: ['./music-video.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MusicVideoComponent implements OnInit {
  
  playlist: Array<IMedia> = [
    {
        title: 'Banana Island Ghost --Trailer',
        src: "https://www.youtube.com/embed/iYvjcNkgqw0",
        type: 'video/mp4'
    },
    {
        title: 'Wo --OLAMIDE',
        src: "https://www.youtube.com/embed/j2u5Gbadn7o",
        type: 'video/mp4'
    },
    {
        title: 'Mans Not Hot --BIG SHAQ',
        src: "https://www.youtube.com/embed/3M_5oYU-IsU",
        type: 'video/mp4'
    }
];

currentIndex = 0;
currentItem: IMedia = this.playlist[ this.currentIndex ];
api: VgAPI;

constructor() {
}
ngOnInit(){

}
onPlayerReady(api: VgAPI) {
    this.api = api;

    this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.playVideo.bind(this));
    this.api.getDefaultMedia().subscriptions.ended.subscribe(this.nextVideo.bind(this));
}

nextVideo() {
    this.currentIndex++;

    if (this.currentIndex === this.playlist.length) {
        this.currentIndex = 0;
    }

    this.currentItem = this.playlist[ this.currentIndex ];
}

playVideo() {
    this.api.play();
}

onClickPlaylistItem(item: IMedia, index: number) {
    this.currentIndex = index;
    this.currentItem = item;
}
}
