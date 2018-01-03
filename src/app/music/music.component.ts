import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {
  public carouselTileItems: Array<any>;
  public carouselTile: NgxCarousel;
 public evt;
  ngOnInit(){
    this.carouselTileItems = [
        "http://res.cloudinary.com/sammiestarks/image/upload/v1512466007/SFTOS_atmbz4.jpg",
        "http://res.cloudinary.com/sammiestarks/image/upload/v1512466006/reminese_xpmwwx.jpg",
        "http://res.cloudinary.com/sammiestarks/image/upload/v1512465997/falz_nwwjhn.jpg",
        "http://res.cloudinary.com/sammiestarks/image/upload/v1512466003/kissDaniel_vz55ws.jpg",
        "http://res.cloudinary.com/sammiestarks/image/upload/v1512466007/runtown_ji2swb.jpg",
        "http://res.cloudinary.com/sammiestarks/image/upload/v1512465994/davidoFia_icl9w6.jpg",
        "http://res.cloudinary.com/sammiestarks/image/upload/v1512466008/skales_olexmz.jpg",
        "http://res.cloudinary.com/sammiestarks/image/upload/v1512466009/tuface_lnba8v.jpg",
        "http://res.cloudinary.com/sammiestarks/image/upload/v1512466003/lilkesh_bubu6t.jpg"
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
      load: 2,
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
         for (let i = len; i < len + 4; i++) {
           this.carouselTileItems.push(i);
         }
       }
    
     }

     // carouselLoad will trigger this funnction when your load value reaches
     // it is helps to load the data by parts to increase the performance of the app
     // must use feature to all carousel
}
