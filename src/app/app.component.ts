import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Music App';
  flag:any;
  constructor( private router: Router) {this.router.navigate([`/Login`])}
ngOnInit() {
  
  if(this.flag){}else{this.flag=true;
  this.page();}
  
}
page()
{
}
}
