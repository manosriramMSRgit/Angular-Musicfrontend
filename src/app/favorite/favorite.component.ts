import { Component, OnInit } from '@angular/core';
import { FavoriteTable } from '../displaysongs/model/FavoriteTable';
import { DisplaysongsService } from '../displaysongs.service';

import { FavoriteService } from '../favorite.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  //providers: [FavoriteService,LoginService]
})
export class FavoriteComponent implements OnInit {
  private i:Number=0;
  message='';
  isSongDeleted:any;
  getFavorites : FavoriteTable[]=[]
  navBar:any;
  flag:any;
  constructor(private service:FavoriteService,private shared:DisplaysongsService) { }
  userId: Number=1;
  ngOnInit(): void {
    this.i=this.shared.getValue();
    console.log(this.i)
    this.service.getFavoritesByUserId(this.i).subscribe(
      data => {
        this.getFavorites = data;
      });
  }
  deleteFavoriteSong(id : Number) {
    
    this.service.deleteFavoritesById(id).subscribe(data=>{
      console.log("Record Deleted")
      this.isSongDeleted=true;
      
    },err=>{console.log(err)});
    //window.location.reload();
      alert("Favorite Song Deleted Successfully");
      this.refreshPage();
  }
  recommendSong(fav : any) 
  {  this.service.checkRecommend(fav).subscribe
  (
       data=>
        {
           console.log(data)

            if(data === null)
            {
              this.service.recommendSongById(fav).subscribe
              (
                data=>
                {
                  console.log("Recommended Successfully")
                  alert("Recommend Song Added Successfully");
                  this.flag=true;
                },
                err=>{console.log(err)
                }
              );
          }
        } ,err=>{
          alert("Recommend Song Already Exist")
          console.log("hi")
        }
         
                 
                
  ); 
  }

  refreshPage(){
    // window.location.reload();
    this.i=this.shared.getValue();
    console.log(this.i)
    this.service.getFavoritesByUserId(this.i).subscribe(
      data => {
        this.getFavorites = data;
      });
  
  }
  

  // myFunction() {
  //   this.navBar=document.getElementById("myTopnav");
  //   if (this.navBar.className === "topnav") {
  //     this.navBar.className += " responsive";
  //   } else {
  //     this.navBar.className = "topnav";
  //   }
  // }

  myFunction()
  {
    var txt;
    if (confirm("Press OK to Logout!")) {
      txt = "You pressed OK!";
      window.location.href="login";
    } else {
      txt = "You pressed Cancel!";
    
  }

  }}
