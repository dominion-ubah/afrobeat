import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  public carouselTileItems: Array<any>;
  public carouselTile: NgxCarousel;
 public evt;
  ngOnInit(){
    this.carouselTileItems = [
      'http://res.cloudinary.com/sammiestarks/image/upload/v1513262365/Wedding-party-2_lrj8is.jpg',
      'http://res.cloudinary.com/sammiestarks/image/upload/v1513262337/bama_wesgg8.jpg',
      'http://res.cloudinary.com/sammiestarks/image/upload/v1513263115/mywifeandi_mijkuk.jpg',
      'http://res.cloudinary.com/sammiestarks/image/upload/c_scale,w_1019/v1513262376/triptojamaica_pjjggf.jpg',
      'http://res.cloudinary.com/sammiestarks/image/upload/v1513262337/bama_wesgg8.jpg',
      'http://res.cloudinary.com/sammiestarks/image/upload/v1513263115/mywifeandi_mijkuk.jpg',
      'http://res.cloudinary.com/sammiestarks/image/upload/v1513262351/010-days-in-suncity-1-2017-latest-nigerian-nollywood-movie-wapbaze-com-July-Saturday-08-07-2017LoadedNG.com__wzcbcp.jpg'
    ];
 
    this.carouselTile = {
      grid: {xs: 1, sm: 2, md: 3, lg: 4, all: 0},
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
    evt: any
  ) {
 this.evt = evt;
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
