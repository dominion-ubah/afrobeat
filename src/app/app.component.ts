import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public loading;
  contructor(){
    this.loading = true;

  }
  ngOnInit() {
    setTimeout(() => { this.loading = false; }, 5000);
  }
}
