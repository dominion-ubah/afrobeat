import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute, } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute ) { }

  ngOnInit() {
    // this.isOnAdmin=false;

  }
  isOnAdminFunc(){
    if(this.route.snapshot.url[0]){
      let url = this.route.snapshot.url[0].path.toString();
      if (url === "admin"){
        console.log(url);
        return true;
       } else {
        console.log("no url");
         return  false;
       }
    }
   
  
    
    
  }
  goToAdmin(){
  this.router.navigate(['/admin'])

  }
}
