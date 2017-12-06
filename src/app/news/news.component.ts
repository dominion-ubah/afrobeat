import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  public carouselTileItems: Array<any>;
  public carouselTile: NgxCarousel;
 
  ngOnInit(){
    this.carouselTileItems = [
      "http://res.cloudinary.com/sammiestarks/image/upload/v1512463060/divorced_nh0ujs.jpg",
        "http://res.cloudinary.com/sammiestarks/image/upload/v1512465985/bovi_lgaasw.png",
        "http://res.cloudinary.com/sammiestarks/image/upload/v1512463056/chris_qsmj2q.jpg",
        "http://res.cloudinary.com/sammiestarks/image/upload/v1512466001/davidoBillion_buvgaf.jpg",
        "http://res.cloudinary.com/sammiestarks/image/upload/v1512465994/caro2_hlwgqp.jpg",
        "http://res.cloudinary.com/sammiestarks/image/upload/v1512465983/caro3_lmh6xt.jpg",
        "http://res.cloudinary.com/sammiestarks/image/upload/v1512465991/caro4_s9yjax.jpg",
        "http://res.cloudinary.com/sammiestarks/image/upload/v1512465716/image_1495220402_67010566_qooahq.jpg",
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
    // evt: any
  ) {
 
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
