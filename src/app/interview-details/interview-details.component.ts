import { Component, OnInit } from '@angular/core';
import { VgAPI } from 'videogular2/core';

export interface IMedia {
  coverSrc: string;
title: string;
src: string;
type: string;
}

@Component({
  selector: 'app-interview-details',
  templateUrl: './interview-details.component.html',
  styleUrls: ['./interview-details.component.scss']
})
export class InterviewDetailsComponent implements OnInit {
  playlist: Array<IMedia> = [
    {
        coverSrc: 'http://res.cloudinary.com/sammiestarks/image/upload/q_100/v1513262365/Wedding-party-2_lrj8is.jpg',
        title: 'The Wedding Party 2 Trailer',
        src: "http://res.cloudinary.com/sammiestarks/video/upload/v1512482005/The_Wedding_Party_2_-_Trailer_-_YouTube_ejmzvy.mp4",
        type: 'video/mp4'
    },
    {
      coverSrc: 'http://res.cloudinary.com/sammiestarks/image/upload/v1513263115/mywifeandi_mijkuk.jpg',
        title: 'My wife and I',
        src: "http://res.cloudinary.com/sammiestarks/video/upload/v1512482125/FACTORY78__Davido_performance_at_the_MOBO_Awards_2017_360p_lzhydg.mp4",
        type: 'video/mp4'
    },
    {
      coverSrc: 'http://res.cloudinary.com/sammiestarks/image/upload/c_scale,w_1019/v1513262376/triptojamaica_pjjggf.jpg',
        title: 'Trip to Jamaica',
        src: "../../assets/videos/Wizkid%20and%20Ebro%20Darden%20On%20Beats%201%20%5BExcerpt%5D%20-%20YouTube.MP4",
        type: 'video/mp4'
    },
    {
      coverSrc: 'http://res.cloudinary.com/sammiestarks/image/upload/v1513262337/bama_wesgg8.jpg',
        title: 'Banana Island Ghost',
        src: "../../assets/videos/WIZKID%20Live%20Performance%20-%20Royal%20Albert%20Hall,%20London%202017%20-%20YouTube.MP4",
        type: 'video/mp4'
    },
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
this.api.volume = 0;

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



 
 



