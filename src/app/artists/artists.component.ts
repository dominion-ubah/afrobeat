import { Component, OnInit, } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {
  public carouselTileItems: Array<any>;
  public carouselTile: NgxCarousel;
  public evt;
 
  ngOnInit(){
    this.carouselTileItems = [
      "http://res.cloudinary.com/sammiestarks/image/upload/q_100/v1513683522/dBanjCeleb_htzbif.jpg",
      "http://res.cloudinary.com/sammiestarks/image/upload/q_100/v1513677221/asa_xrvyvc.jpg",
      "http://res.cloudinary.com/sammiestarks/image/upload/e_displace,q_100/v1513679383/simi_j0g4qa.jpg",
      "http://res.cloudinary.com/sammiestarks/image/upload/e_blur_region:100,q_100/v1512463068/wizkidfav_wbzj31.jpg",
      "http://res.cloudinary.com/sammiestarks/image/upload/e_displace,q_100/v1513677221/Davido_kvste2.jpg",
      "http://res.cloudinary.com/sammiestarks/image/upload/e_displace,q_100/v1513677232/Banky-W_plx41l.jpg"

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
