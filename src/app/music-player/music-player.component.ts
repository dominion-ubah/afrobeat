import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class MusicPlayerComponent implements OnInit {
  sources: Array<Object>;
  public maxPlayer:boolean;
  
      constructor() {
          this.maxPlayer = false;
          this.sources = [
              {
                  src: "http://static.videogular.com/assets/audios/videogular.mp3",
                  type: "audio/mp3"
              }
          ];
      }
  
      ngOnInit() {
      }
      togglePlayer(){
          if(this.maxPlayer){
              console.log(true ,"to  false")
              return this.maxPlayer=false;

          }else{
            console.log(false ,"to  true")
              return this.maxPlayer = true;
          }
      }
  }
