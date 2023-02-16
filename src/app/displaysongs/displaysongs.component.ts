
import { Component, OnInit } from '@angular/core';
import { DisplaysongsService } from '../displaysongs.service';
import { Favorite } from '../Favorite';
import { Music } from './model/music';





@Component({
  selector: 'app-displaysongs',
  templateUrl: './displaysongs.component.html',
  styleUrls: ['./displaysongs.component.css'],
  //providers: [DisplaysongsService]
})
export class DisplaysongsComponent implements OnInit {

  musics : Music[] = [];
  favorites:Favorite[] = [];
  flag:any;
  constructor(private service:DisplaysongsService) { }

  ngOnInit(): void {

    this.service.getAllMusics().subscribe(
      data => {
        this.musics = data;
      });
  }
  addMusic(music: any)
   {
    this.service.checkFavorite(music).subscribe
    ( data=>
      {
        console.log(data)
        if(data === null)
        {
          this.service.addMusicOneByOne(music).subscribe
            (data=>
              {
                  console.log("Added Successfully")
                  alert("Favorite Song Added Successfully")
                  this.flag=true;

              }
            );
        }   
      },
    
      err=>{
        alert("Favorite Song Already Exist");
              console.log(err)
               
            }
    );
    // if(this.flag){alert("Favorite Song Already Exist"); }
  }

  


  myFunction()
  {
    var txt;
    if (confirm("Press OK to Logout!")) {
      txt = "You pressed OK!";
      window.location.href="./login";
    } else {
      txt = "You pressed Cancel!";
    
  }}

}
