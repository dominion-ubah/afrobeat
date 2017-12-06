import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.scss']
})
export class MainHomeComponent implements OnInit {
  public carouselTileItems: Array<any>;
  public carouselTile: NgxCarousel;
 
  ngOnInit(){
    
    this.carouselTileItems = [
      'http://res.cloudinary.com/sammiestarks/image/upload/v1512465984/caro5_pk7vjn.jpg',
        'http://res.cloudinary.com/sammiestarks/image/upload/v1512465703/Bukky-Wright-1_b1d9di.jpg',
        'http://res.cloudinary.com/sammiestarks/image/upload/v1512465708/DSC_0466-600x732_r0qiuv.jpg',
        'http://res.cloudinary.com/sammiestarks/image/upload/v1512465708/Osas-Cover-page-KOKOTV-bellanaija_ro8xai.jpg',
        'http://res.cloudinary.com/sammiestarks/image/upload/v1512465712/beverly_y9ri7s.jpg',
        'http://res.cloudinary.com/sammiestarks/image/upload/v1512465720/Cover-IG-1_dixpt5.jpg',
        'http://res.cloudinary.com/sammiestarks/image/upload/v1512466001/davidoBillion_buvgaf.jpg',
        'http://res.cloudinary.com/sammiestarks/image/upload/v1512465714/Funke-Akindele1-1_dm6vxh.png',
        'http://res.cloudinary.com/sammiestarks/image/upload/v1512465714/images_3_odrxr8.jpg',
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
    // evt: any
  ) {
 
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
