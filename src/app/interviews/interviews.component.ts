import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.scss']
})
export class InterviewsComponent implements OnInit {

  public carouselTileItems: Array<any>;
  public carouselTile: NgxCarousel;
 public evt;
  ngOnInit(){
    this.carouselTileItems = [
        "http://res.cloudinary.com/sammiestarks/image/upload/q_100/v1513678249/yemiAlade_pnrncc.jpg",
        "http://res.cloudinary.com/sammiestarks/image/upload/q_100/v1513683522/derinle_uu7vqy.jpg",
        "http://res.cloudinary.com/sammiestarks/image/upload/q_100/v1513679385/jmartins_sojhqr.jpg",
        "http://res.cloudinary.com/sammiestarks/image/upload/q_100/v1513679382/eldee_tnyvap.jpg",
        "http://res.cloudinary.com/sammiestarks/image/upload/q_100/v1512466011/wizkid-2babymama_pbdo9g.jpg",
        "http://res.cloudinary.com/sammiestarks/image/upload/v1512466013/wizkidfav_muohgq.jpg",
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
 this.evt= e;
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
