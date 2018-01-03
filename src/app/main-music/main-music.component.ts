import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
@Component({
  selector: 'app-main-music',
  templateUrl: './main-music.component.html',
  styleUrls: ['./main-music.component.scss']
})
export class MainMusicComponent implements OnInit {
  public carouselTileItems: Array<any>;
  public carouselTile: NgxCarousel;
 public evt;
  ngOnInit(){
    this.carouselTileItems = [
      'http://res.cloudinary.com/sammiestarks/image/upload/q_100/v1512463060/davidoFia_sy9fh9.jpg',
      'http://res.cloudinary.com/sammiestarks/image/upload/e_displace,q_100/v1512463056/ayo_g09xgi.jpg',
      'http://res.cloudinary.com/sammiestarks/image/upload/e_auto_color,q_100/v1512466005/majeek_xmawx3.jpg',
      'http://res.cloudinary.com/sammiestarks/image/upload/q_100/v1513610179/simiSmileForMe_obkj1o.jpg',
      'http://res.cloudinary.com/sammiestarks/image/upload/q_100/v1513610174/sadeAG_hmosge.jpg',
      'http://res.cloudinary.com/sammiestarks/image/upload/q_100/v1513610174/reminiseKOncienment_mtfpyg.jpg',
      'http://res.cloudinary.com/sammiestarks/image/upload/q_100/v1513674136/olamideWO_ct7utj.jpg',
    ];
 
    this.carouselTile = {
      grid: {xs: 1, sm: 1, md: 2, lg: 4, all: 0},
      slide: 2,
      speed: 400,
      animation: 'lazy',
      point: {
        visible: true,
        pointStyles: `
          .ngxcarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 12px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            box-sizing: border-box;
          }
          .ngxcarouselPoint li {
            display: inline-block;
            border-radius: 50%;
            border: 2px solid rgba(0, 0, 0, 0.55);
            padding: 4px;
            margin: 0 3px;
            transition-timing-function: cubic-bezier(.17, .67, .83, .67);
            transition: .4s;
          }
          .ngxcarouselPoint li.active {
              background: #6b6b6b;
              transform: scale(1.2);
          }
        `
      },
      interval: 2000,
      load: 2,
      loop: true,
      touch: true,
      easing: 'ease'
    }
  }
 
  public carouselTileLoad(
    e: any
  ) {
 this.evt = e;
    const len = this.carouselTileItems.length
    if (len <= 4) {
      for (let i = len; i < len + 8; i++) {
        this.carouselTileItems.push(i);
      }
    }
 
  }

     // carouselLoad will trigger this funnction when your load value reaches
     // it is helps to load the data by parts to increase the performance of the app
     // must use feature to all carousel
}
