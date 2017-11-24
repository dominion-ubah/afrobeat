import { Component, OnInit } from '@angular/core';
import { VgAPI } from 'videogular2/core';

export interface IMedia {
  title: string;
  src: string;
  type: string;
}

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {

      playlist: Array<IMedia> = [
          {
              title: 'The Wedding Party 2 Trailer',
              src: "../../assets/videos/The%20Wedding%20Party%202%20-%20Trailer%20-%20YouTube.MP4",
              type: 'video/mp4'
          },
          {
              title: 'WizKid - MANYA',
              src: "../../assets/videos/WIZKID%20-%20MANYA%20%5BOfficial%20VIDEO%5D%20-%20YouTube.MP4",
              type: 'video/mp4'
          },
          {
              title: 'Wizkid and Ebro Darden On Beats',
              src: "../../assets/videos/Wizkid%20and%20Ebro%20Darden%20On%20Beats%201%20%5BExcerpt%5D%20-%20YouTube.MP4",
              type: 'video/mp4'
          },
          {
              title: 'Davido -- FIA',
              src: "../../assets/videos/Davido%20-%20FIA%20(Official%20Video)%20%5B720p%5D.mp4",
              type: 'video/mp4'
          },
          {
              title: 'Davido -- LIKE DAT',
              src: "../../assets/videos/Davido%20-%20Like%20Dat%20(Official%20Video)%20%5B720p%5D.mp4",
              type: 'video/mp4'
          },
          {
              title: 'WIZKID Live Performance-Royal Albert Hall London 2017',
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